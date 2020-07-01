import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GxdcCKMadqcPYahntLF36ZZewlVCOIrQe0GEEiGLYbtGWsCoxjlGvb5TWHSYuuRbxehy4EGJnUi9A1UbmWc35U900KZiTcVUQ";

  const onToken = (token) => {
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token),
    }).then((response) => {
      response.json().then((data) => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="My Clothing Ltd."
      token={onToken}
      stripeKey={publishableKey}
      image="https://svgshare.com/i/MJ5.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
    />
  );
};

export default StripeCheckoutButton;
