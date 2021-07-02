import React from "react";
import PropTypes from "prop-types";


function BoochDetail(props) {
  const { booch, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h2>Booch Detail</h2>
      <h3>
        {booch.name} - {booch.brand} - {booch.price} - {booch.flavor}
      </h3>
      <button className="btn btn-primary" onClick={onClickingEdit}>
        Update Booch
      </button>
      <button className="btn btn-primary" onClick={() => onClickingDelete(booch.id)}>
        {" "}
        Delete Booch
      </button>
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
