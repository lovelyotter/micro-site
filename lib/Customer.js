// Customer.js
// ===========
// Handles all checkout functionality.
// Uses [Stripe](https://stripe.com) for customer handling
var opts = require('./opts'),
    stripe = require('stripe')(opts.get('STRIPE_K'));

//## Main export
exports.create = function(token, customer, callback){

  stripe.customers.create({
    card: token.id,
    description: 'payinguser@example.com'
  }).then(function(customer) {
    return stripe.charges.create({
      amount: 699, // amount in cents
      currency: "usd",
      customer: customer.id
    });
  }).then(function(charge) {
    saveStripeCustomerId(user, customer.id);
  });

};
