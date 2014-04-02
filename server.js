require('newrelic');

var express = require('express'),
    opts = require('./lib/opts');
    checkout = require('./lib/Checkout');
    customer = require('./lib/Customer');
    app = express(),
    port = Number(opts.get('PORT'));

app.use(express.static(__dirname + '/client'));
app.use(express.json());
app.use(express.urlencoded());
app.post('/checkout', function(req, res){
  customer.create(req.body.token, req.body.customer, function(){console.log('back');});
  res.send();
});
app.listen(port);
console.log('Listening on port ' + port);
