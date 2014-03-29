// Stripe
// ======
// Handles all of the client-side payment proocessing
// related to [Stripe](https://stripe.com/)
import {ajax} from './util';
var handler = StripeCheckout.configure({
      key: 'pk_test_AbSR2xBdtLx1oleKC2Lr1Vyy',
      image: '/square-image.png',
      token: function(token, args) {
        console.log(token);
        console.log(args);
        //ajax('/', 'GET', 'data=3000', function(){alert('port');});
        // Use the token to create the charge with a server-side script.
        // You can access the token ID with `token.id`
      }
    }),
    nlPurchaseElms = document.querySelectorAll('.purchase'),
    idx = 0,
    len = nlPurchaseElms.length;

// Attach click handler to all purchase buttons
for(idx; idx < len; idx++){
  nlPurchaseElms[idx].addEventListener('click', function(e) {
    // Open Checkout with further options
    handler.open({
      name: 'Lovely Otter',
      description: '6oz Body Butter ($6.99)',
      amount: 699,
      shippingAddress: true,
      billingAddress: true
    });
    e.preventDefault();
  });
};
