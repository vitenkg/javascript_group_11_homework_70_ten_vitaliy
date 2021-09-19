import React from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import {Route} from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import {useSelector} from "react-redux";

const Checkout = ({history, match}) => {
    const ingredients = useSelector(state => state.burgerBuilder.ingredients);

  const checkoutCancelHandler = () => {
    history.goBack();
  };

  const checkoutContinueHandler = () => {
    history.replace('/checkout/contact-data');
  };

  return (
    <>
      <CheckoutSummary
        ingredients={ingredients}
        next={checkoutContinueHandler}
        cancel={checkoutCancelHandler}
      />
      <Route
        path={match.path + '/contact-data'}
        render={props => (
          <ContactData ingredients={ingredients} {...props} />
        )}
      />
    </>
  );
};

export default Checkout;