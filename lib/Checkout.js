// Checkout.js
// ===========
// Handles all checkout functionality.
// Uses [Stripe](https://stripe.com) for payment processing

var stripe = require('stripe');

// Make sure all required parameters are present
function validCktObj(cktObj){
  return cktObj &&
         cktObj.hasOwnProperty('amount') &&
         cktObj.hasOwnProperty('stripeToken');
};

//## Main export
// `cktObj` may look like {
//    "amount": `Number` _in cents_,
//    "stripeToken": `stripeToken`,
//    ["currency": `String` _default: "usd"_],
//    ["description": `String`]
// }
exports.Checkout = function(cktObj){
  // Set your secret key: remember to change this to your live secret key in production
  // See your keys here https://manage.stripe.com/account
  stripe.setApiKey("sk_test_EJTBNnyLtcYnNSn3wUwEOiCg");

  // (Assuming you're using express - expressjs.com)
  // Get the credit card details submitted by the form
  //var stripeToken = request.body.stripeToken;

  var charge = stripe.charges.create({
    amount: cktObj.amount, // amount in cents, again
    currency: cktObj.currency || "usd",
    card: cktObj.stripeToken,
    description: cktObj.description || ""
  }, function(err, charge) {
    if (err && err.type === 'StripeCardError') {
      // The card has been declined
      // XXX Inform the user
    }
    else{
      console.log(charge);
      // XXX Notify user
      // XXX  useremail
    }
  });
};
