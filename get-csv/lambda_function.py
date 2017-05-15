import os
import json
import csv
import datetime

import boto3
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

def secret_folder():
    import random; import string
    s = string.lowercase + string.digits
    return ''.join(random.sample(s, 20))

def get_table_names(app):
    return app + 'UserData', app + 'AppData'

def get_appdata(app):
    userdata_table, appdata_table = get_table_names(app)
    query = 'SELECT * FROM {}'.format(appdata_table)

    data = [['UserID', 'DateTime', 'NumClicks', 'CentsSpent', 'SecondsSpent']]
    with conn.cursor() as cur:
        try:
            cur.execute(query)
        except:
            print('failed on: {}'.format(query))
            raise
        for row in cur:
            data.append(row)
    
    fn = 'appdata.csv'
    local_fn = '/tmp/{}'.format(fn) 
    with open(local_fn, "wb") as f:
        writer = csv.writer(f)
        writer.writerows(data)

    return local_fn, fn

def get_userdata(app):
    userdata_table, appdata_table = get_table_names(app)
    query = 'SELECT * FROM {}'.format(userdata_table)

    data = [['UserID', 'Age', 'Country', 'Gender', 'Language']]

    with conn.cursor() as cur:
        try:
            cur.execute(query)
        except:
            print('failed on: {}'.format(query))
            raise
        for row in cur:
            data.append(row)
    
    fn = 'userdata.csv'
    local_fn = '/tmp/{}'.format(fn) 
    with open(local_fn, "wb") as f:
        writer = csv.writer(f)
        writer.writerows(data)

    return local_fn, fn

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
        raise
    try:
        data_type = data['data_type']
    except:
        raise

    if data_type == 'app':
        local_fn, fn = get_appdata(app)
    elif data_type == 'user':
        local_fn, fn = get_userdata(app)
    else:
        raise ValueError('unknown data_type: {}'.format(data_type))

    key = '{}/{}'.format(secret_folder(), fn) 
    extra_args = {
        'Expires': datetime.datetime.today() + datetime.timedelta(hours=3),
        'ACL': 'public-read', 
        'ContentType': 'text/plain' ,
    } 
 
    # upload to S3 
    s3 = boto3.client('s3', region_name=region) 
    with open(local_fn, 'r') as f: 
        s3.upload_fileobj(f, 
            Bucket = bucket,  
            Key = key, 
            ExtraArgs = extra_args 
        )

    url = 'https://s3-{}.amazonaws.com/{}/{}'.format(region, bucket, key) 

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
        },
        'body': json.dumps({'url': url})
        }