import React, { useContext } from 'react';
import StripeCheckout from 'react-stripe-checkout';

import { CartContext } from '../../contexts/cart/cart.provider';
import CurrentUserContext from '../../contexts/current-user/current-user.context';

import { createUserPurchasedProduct } from '../../firebase/firebase.utils';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_TMsCCxbAGfUTfNox2Moeo4zK00UUJSLouS';

  const { cartItems, clearAllItemsFromCart } = useContext(CartContext);
  const currentUser = useContext(CurrentUserContext);

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
    clearAllItemsFromCart();
    createUserPurchasedProduct(currentUser, cartItems);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="The Ugly Duckling"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
