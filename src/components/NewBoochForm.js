import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewBoochForm(props) {
  function handleNewBoochFormSubmission(booch) {
    event.preventDefault();
    props.onNewBoochCreation({
      name:booch.target.name.value,
      brand:booch.target.brand.value,
      price:booch.target.price.value,
      flavor:booch.target.flavor.value,
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

