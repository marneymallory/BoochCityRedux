import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewBoochForm(props) {
  function handleNewBoochFormSubmission(event) {
    event.preventDefault();
    props.onNewBoochCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      flavor: event.target.flavor.value,
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewBoochFormSubmission}
        buttonText="Submit"
      />
    </React.Fragment>
  );
}

NewBoochForm.propTypes = {
  onNewBoochCreation: PropTypes.func,
};

export default NewBoochForm;

