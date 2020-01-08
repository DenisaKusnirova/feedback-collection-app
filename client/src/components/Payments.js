import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { handleToken } from "../actions";

function Payments() {
  const dispatch = useDispatch();

  return (
    <StripeCheckout
      name="Emaily"
      description="$5 for 5 email credits"
      amount={500}
      token={token => dispatch(handleToken(token))}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <Button variant="contained" color="primary">Add credits</Button>
    </StripeCheckout>
  );
}

export default Payments;
