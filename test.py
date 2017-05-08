import requests
import json

'''
TODO: add authorization via the header
'''

# url format = https://[my-api-id].execute-api.[region-id].amazonaws.com/[stage]/[resource]
url = 'https://dil2yon0pd.execute-api.us-west-2.amazonaws.com/prod/getPlotData'

r = requests.post(url, data={'plot': 'pie', 'response': 'centsspent', 'segment': 'language'})
# r = requests.post(url, data={'plot': 'timeseries', 'response': 'SecondsSpent', 'segment': 'Age', 'display': 'mean'})

print('Status code: ' + str(r.status_code))
print(r.text[1:-1]) # strips quotation marks @ first and last index by subsetting
print ''
print(r.headers) # strips quotation marks @ first and last index by subsetting

'''
{
  "body": {
      "plot": "bar",
      "response": "SecondsSpent",
      "segment": "age"
  }
}
'''