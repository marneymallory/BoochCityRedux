import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditBoochForm(props) {
  const { booch } = props;

  function handlingEditBoochFormSubmission(event) {
    event.preventDefault();
    props.onEditBooch({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      flavor: event.target.flavor.value,
      id: event.id,
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handlingEditBoochFormSubmission}
        buttonText="Update Booch"
      />
    </React.Fragment>
  );
}

EditBoochForm.propTypes = {
  booch: PropTypes.object,
  onEditBooch: PropTypes.func,
};

export default EditBoochForm;
