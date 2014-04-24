// Stripe
// ======
// Handles all of the client-side payment proocessing
// related to [Stripe](https://stripe.com/)
(function(ajax){

  var nlPurchaseElms = document.querySelectorAll('.purchase'),
      idx = 0,
      len = nlPurchaseElms.length,
      // Send charge data to server to actually charge
      handler = StripeCheckout.configure({
        key: 'pk_live_vdwpAomEOHEOORM0wm3cpsIr',
        image: 'images/white_heart_trans.png',
        token: function(token, args) {
          $.ajax({
            url : 'checkout',
            type: 'POST',
            data: {token:token, customer:args},
            sucess: function(resp){alert(resp);}
          });
        }
      });

  // Attach click handler to all purchase buttons to open forms
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
}(lo.ajax));
