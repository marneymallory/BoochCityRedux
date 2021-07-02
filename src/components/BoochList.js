import React from "react";
import Booch from "./Booch";
import PropTypes from "prop-types";

function BoochList(props) {
  return (
    <React.Fragment>
      {props.boochList.map((booch) => (
        <Booch
          whenBoochClicked={props.onBoochSelection}
          name={booch.name}
          brand={booch.brand}
          price={booch.price}
          flavor={booch.flavor}
          id={booch.id}
          key={booch.id}
        />
      ))}
    </React.Fragment>
  );
}

BoochList.propTypes = {
  boochList: PropTypes.array,
  onBoochSelection: PropTypes.func,
};

export default BoochList;
