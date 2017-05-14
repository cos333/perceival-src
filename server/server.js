const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Answer API requests.
app.get('/api', function(req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});