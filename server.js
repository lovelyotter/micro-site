require('newrelic');

var express = require('express'),
    opts = require('./lib/opts'),
    log = require('./lib/log')(),
    customer = require('./lib/Customer'),
    app = express(),
    port = Number(opts.get('PORT'));

app.use(express.static(__dirname + '/client'));
app.use(express.json());
app.use(express.urlencoded());
app.post('/checkout', function(req, res){
  customer.create(req.body.token, req.body.customer, function(){res.send();}); 
});
app.listen(port);
log.info('Listening on port ' + port);
