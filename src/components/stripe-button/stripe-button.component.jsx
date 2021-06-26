import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "../../assets/imgs/crown.svg";

// in order for stripe to work we need to put the prices in cents (we manage them on dollars so the prices to be converted to cents need to be multiplied by 100 eg. 12 dollars = 12 * 100 = 1200 cents).
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  // This key is for testing purposes, we can change it for a real one on stripe site
  const publishableKey =
    "pk_test_51Hj5OSGQl7lXXk3AHv8qc2D4yMOa44hiiQKyeKK6jZ79a8tMfdS8WLEnfzW2vpQkm2w50DeXtgcjufmk8uhI8O5r004wHhTCBU";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  // for more info about StripeCheckout button props visit https://github.com/azmenak/react-stripe-checkout
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/YXs.svg'
      description={`Your total is $${price}`}
      ammount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
