import lambda_function

print lambda_function.lambda_handler({'body': {'plot': 'pie', 'response': 'CentsSpent', 'segment': 'Gender'}}, None)

print('\n' * 3)

print lambda_function.lambda_handler({'body': {'plot': 'timeseries', 'response': 'CentsSpent', 'segment': 'Gender', 'display': 'average'}}, None)