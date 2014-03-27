// Checkout
var handler = StripeCheckout.configure({
      key: 'pk_test_AbSR2xBdtLx1oleKC2Lr1Vyy',
      image: '/square-image.png',
      token: function(token, args) {
        // Use the token to create the charge with a server-side script.
        // You can access the token ID with `token.id`
      }
    }),
    nlPurchaseElms = document.querySelectorAll('.purchase'),
    idx = 0,
    len = nlPurchaseElms.length;

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
