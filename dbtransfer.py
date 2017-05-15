import sys
import secret_config
import pymysql
import numpy as np
import time
from firebase import firebase

# rds settings (amazon database service)
rds_host  = secret_config.host
name = secret_config.db_username
password = secret_config.db_password
db_name = secret_config.db_name

try: 
    conn = pymysql.connect(rds_host, user=name, port=3306, passwd=password, db=db_name, connect_timeout=5) 
except: 
    print('Could not connect') 
    sys.exit() 

print('Connected') 

def add(): 
"""This function fetches content from mysql RDS instance """
    item_count = 0 
 
    with conn.cursor() as cur: 
        table_name = 'SimulatedAppData'
 
        print('Starting insertion') 
 
        # Instead of doing a listener, just retrieve all data, push it, then delete.
        myFirebase = firebase.FirebaseApplication('https://perceival-6d84e.firebaseio.com/', None)
        result = myFirebase.get('/', None)

        print result

        for key in result:
            if key ==  None:
                continue
            print key['id']
            dt = key['DateTime']
            pfx = 'insert into {} (UserID, DateTime, NumClicks, CentsSpent, SecondsSpent) '.format(table_name) 
            vals = 'values({}, {}, {}, {}, {})'.format(key['id'], dt, key['NumClicks'], key['CentsSpent'], key['SecondsSpent']) 
            try: 
                cur.execute(pfx + vals) 
            except:
                print('failed on: {}'.format(vals))
                raise 2
        print('user {}'.format(key))

        conn.commit()
        cur.execute('select * from {}'.format(table_name))
        for row in cur:
            item_count += 1

        myFirebase.delete('/', None)
    
    print 'Added %d items to RDS MySQL table' % (item_count) 

starttime=time.time()
while True:
  print "tick"
  add()
  time.sleep(60.0 - ((time.time() - starttime) % 60.0))