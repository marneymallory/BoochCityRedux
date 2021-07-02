import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function BoochDetail(props) {
  const { booch, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h2>Booch Detail</h2>
      <h3>
        {booch.name} - {booch.brand} - {booch.price} - {booch.flavor}
      </h3>
      <Button variant="primary" onClick={onClickingEdit}>
        Update Booch
      </Button>
      <Button variant="danger" onClick={() => onClickingDelete(booch.id)}>
        {" "}
        Delete Booch
      </Button>
      <hr />
    </React.Fragment>
  );
}
BoochDetail.propTypes = {
  booch: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default BoochDetail;
