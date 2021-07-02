import React from "react"; 
import PropTypes from 'prop-types';

function Booch(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenBoochClicked(props.id)}>
        <h3>{props.name} - {props.brand} - {props.price} - {props.flavor}</h3>
      </div>
    </React.Fragment>
  );
}
Booch.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  flavor: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenBoochClicked: PropTypes.func
};

export default Booch;