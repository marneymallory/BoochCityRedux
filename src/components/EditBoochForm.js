import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditBoochForm(props) {
  const { booch } = props;

  function handlingEditBoochFormSubmission(event) {
    event.preventDefault();
    props.onEditBooch({
      name: booch.target.name.value,
      brand: booch.target.brand.value,
      price: booch.target.price.value,
      flavor: booch.target.flavor.value,
      id: booch.id,
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
