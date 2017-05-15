import os
import json

import pymysql

import secret_config

# rds settings
rds_host  = secret_config.host
name = secret_config.db_username
password = secret_config.db_password
db_name = secret_config.db_name

try:
    conn = pymysql.connect(rds_host, user=name, port=3306, passwd=password, db=db_name, connect_timeout=5)
except:
    print('Could not connect to RDS')
    sys.exit()

# plotly.plotly.sign_in('PythonAPI', os.eviron['PLOTLYKEY'])

region = 'us-west-2'
bucket = 'perceival-html-plots'

def get_table_names(app):
    return app + 'UserData', app + 'AppData'

def get_barplot_data(app, data):
    try:
        response = data['response']
        segment = data['segment']
    except:
        print('Received data for {}'.format(data.keys()))
        print('Expected data for {}'.format(['segment', 'response']))
        raise

    userdata_table, appdata_table = get_table_names(app)

    query = 'SELECT {0}, AVG({1}), STDDEV({1}) FROM '.format(segment, response) + \
        '(SELECT UserID, {} FROM {}) A '.format(segment, userdata_table) + \
        'INNER JOIN ' + \
        '(SELECT UserID, {} FROM {}) B '.format(response, appdata_table) + \
        'ON A.UserID = B.UserID ' + \
        'GROUP BY {}'.format(segment)

    labels, means, stdevs = [], [], []

    with conn.cursor() as cur:
        try:
            cur.execute(query)
        except:
            print('failed on: {}'.format(query))
            raise
        for row in cur:
            labels.append(row[0])
            means.append(float(row[1]))
            stdevs.append(float(row[2]))
    
    return {
        'means': means,
        'stdevs': stdevs,
        'labels': labels
    }

def get_timeseries_data(app, data):
    try:
        response = data['response']
        segment = data['segment']
        display = data['display']
    except:
        print('Received data for {}'.format(data.keys()))
        print('Expected data for {}'.format(['response', 'segment', 'display']))
        raise

    userdata_table, appdata_table= get_table_names(app)

    if display == 'average' or display == 'mean':
        display_func = 'AVG'
    elif display == 'sum':
        display_func = 'SUM'
    else:
        display_func = 'AVG'
        print('Unknkown display parameter ({}), defaulting to {}'
            .format(display, display_func))

    query = 'SELECT {}, RoundedDateTime, {}({}) FROM '.format(segment, display_func, response) + \
        '(SELECT UserID, {} FROM {}) A '.format(segment, userdata_table) + \
        'INNER JOIN ' + \
        '(SELECT UserID, {}, CAST(DateTime AS date) AS RoundedDateTime FROM {}) B ' \
            .format(response, appdata_table) + \
        'ON A.UserID = B.UserId ' + \
        'GROUP BY {}, RoundedDateTime'.format(segment)

    n = 0

    out = []

    prev_label = None
    curr_x = []
    curr_y = []

    with conn.cursor() as cur:
        try:
            cur.execute(query)
        except:
            print('failed on: {}'.format(query))
            raise
        for row in cur:
            curr_label = row[0]

            if curr_label != prev_label:
                if not prev_label is None:
                    out.append({ # save
                        'label': prev_label,
                        'x': curr_x,
                        'y': curr_y})

                prev_label = curr_label
                curr_x, curr_y = [str(row[1])], [float(row[2])]
            else:
                curr_x.append(str(row[1]))
                curr_y.append(float(row[2]))

    out.append({
        'label': prev_label,
        'x': curr_x,
        'y': curr_y
        })

    return out

def get_piechart_data(app, data):
    try:
        segment = data['segment']
    except:
        print('Default segment used')
        segment = 'age'

    userdata_table, appdata_table= get_table_names(app)

    query = 'SELECT {0}, COUNT(UserID) '.format(segment) + \
        'FROM {} '.format(userdata_table) + \
        'GROUP BY {};'.format(segment)

    n = 0
    labels, counts = [], []

    with conn.cursor() as cur:
        try:
            cur.execute(query)
        except:
            print('failed on: {}'.format(query))
            raise
        for row in cur:
            labels.append(row[0])
            counts.append(row[1])
            n += row[1]

    props = [float(c) / n for c in counts]

    return {
        'props': props,
        'labels': labels
    }

def lambda_handler(event, context):
    try:
        data = event['body']
    except:
        data = {}
        print('No request data received...must use POST request')
    if not isinstance(data, dict): # then unicode
        split = data.split('&')
        data = {}
        for s in split:
            k, v = s.split('=')
            data[k] = v
    try:
        app = data['app']
    except:
        app = 'Simulated'
        print('Default app used')
    try:
        ''' plot should be `bar`, `timeseries`, `pie` '''
        plot = data['plot']
    except:
        print('Default plot used')
        plot = 'pie'
    
    print('app = {} / plot type = {}'.format(app, plot))

    if plot == 'bar':
        data = get_barplot_data(app, data)
    elif plot == 'timeseries':
        data = get_timeseries_data(app, data)
    elif plot == 'pie':
        data = get_piechart_data(app, data)
    else:
        raise ValueError('Unknown plot type {}'.format(plot))

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
        },
        'body': json.dumps(data)
        }