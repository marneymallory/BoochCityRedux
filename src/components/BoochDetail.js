import React from "react";
import PropTypes from "prop-types";

function BoochDetail(props) {
  const { booch, onClickingDelete, onClickingEdit, onClickingSell } = props;

  return (
    <React.Fragment>
      <h2>Booch Detail</h2>
      <h3>
        {booch.name} - {booch.brand} - {booch.price} - {booch.flavor} - {booch.amountLeft}
      </h3>
      <button className="btn btn-primary" onClick={onClickingEdit}>
        Update Booch
      </button>
      <button className="btn btn-primary" onClick={() => onClickingDelete(booch.id)}>
        {" "}
        Delete Booch
      </button>
      <button className="btn btn-primary" onClick={() => onClickingSell(booch.id)}>
        {" "}
        Sell Booch
      </button>
      <hr />
    </React.Fragment>
  );
}
BoochDetail.propTypes = {
  booch: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func,
};

export default BoochDetail;
