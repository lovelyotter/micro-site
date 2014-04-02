// Customer.js
// ===========
// Handles all checkout functionality.
// Uses [Stripe](https://stripe.com) for customer handling
var opts = require('./opts'),
    log = require('./log')(),
    stripe = require('stripe')(opts.get('STRIPE_K'));

//## Create new customer and immediatley change them
exports.create = function(token, customer, callback){

  stripe.customers.create({
    card: token.id,
    email: token.email,
    description: JSON.stringify(customer, null, 2)
  }).then(function(customer) {
    log.info('Customer created');
    return stripe.charges.create({
      amount: 699, // amount in cents
      currency: "usd",
      customer: customer.id
    });
  }).then(function(charge) {
    log.info('Charge created');
    if(callback){
      callback();
    }
    saveStripeCustomerId(user, customer.id);
  });

};
