import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Kombucha Name" />
        <input type="text" name="brand" placeholder="Brand of Kombucha" />
        <input type="number" name="price" placeholder="Price" />
        <input type="text" name="flavor" placeholder="Flavor of Kombucha" />
        <input type="number" name="amountLeft" min="0" placeholder="Booch Amount" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
