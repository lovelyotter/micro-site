// Checkout.js
// ===========
// Handles all checkout functionality.
// Uses [Stripe](https://stripe.com) for payment processing
var opts = require('./opts'),
    stripe = require('stripe')(opts.get('STRIPE_K'));

//## Main export
// `cktObj` may look like {
//    "amount": `Number` _in cents_,
//    "stripeToken": `stripeToken`,
//    ["currency": `String` _default: "usd"_],
//    ["description": `String`]
// }
exports.process = function(token, customer, callback){

  var charge = stripe.charges.create({
    amount: 699, // amount in cents, again
    currency: "usd",
    card: token.id,
    description: "payinguser@example.com"
  }, function(err, charge) {
    console.log(err);
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
  });
};
