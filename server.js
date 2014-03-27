require('newrelic');

var express = require('express'),
    app = express(),
    port = Number(process.env.PORT || 8888);

app.use(express.static(__dirname + '/site'));

app.listen(port);
console.log('Listening on port ' + port);
