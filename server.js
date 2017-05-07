'use strict';

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');
const request = require('request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }
app.use(express.static('client/build'));

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://sheonhan.auth0.com/.well-known/jwks.json"
    }),
    audience: 'perceival.tech',
    issuer: "https://sheonhan.auth0.com/",
    algorithms: ['RS256']
});

app.use(jwtCheck);

var url = 'https://dil2yon0pd.execute-api.us-west-2.amazonaws.com/prod/getPlotData'
var bodydata =  {
      'plot': 'bar',
      'response': 'SecondsSpent',
      'segment': 'age'
  }

request.post({
  url: url,
  form: bodydata
}, function (error, response, body) {
  console.log(response['headers']);
  console.log(body);
});

app.get('/perceival', function (req, res) {
  res.send('Secured Resource');
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});