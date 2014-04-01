// Checkout.js
// ===========
// Handles all checkout functionality.
// Uses [Stripe](https://stripe.com) for payment processing
var opts = require('./opts'),
    stripe = require('stripe')(opts.get('STRIPE_K'));

//## Main export
exports.process = function(token, customer, callback){

  var charge = stripe.charges.create({
    amount: 699, // amount in cents
    currency: "usd",
    card: token.id,
    description: "payinguser@example.com"
  }, function(err, charge) {
    if (err && err.type === 'StripeCardError') {
      console.log('DECLINED');
      // The card has been declined
      // XXX Inform the user
    }
    else{
      console.log('|||logging charge!|||');
      console.log(charge);
      // XXX Notify user
      // XXX  useremail
    }
    if(callback){
      callback(err, charge);
    }
  });
};
