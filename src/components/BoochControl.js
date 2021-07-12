import React from "react";
import NewBoochForm from "./NewBoochForm";
import BoochList from "./BoochList";
import BoochDetail from "./BoochDetail";
import EditBoochForm from "./EditBoochForm";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import * as a from "./../actions";

class BoochControl extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      selectedBooch: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedBooch != null) {
      this.setState({
        selectedBooch: null,
        editing: false,
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  };
  handleAddingNewBoochToList = (newBooch) => {
    const { dispatch } = this.props;
    const action = a.addBooch(newBooch);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  };
  handleDeletingBooch = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteBooch(id);
    dispatch(action);
    this.setState({ selectedBooch: null });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleChangingSelectedBooch = (id) => {
    const selectedBooch = this.props.masterBoochList[id];
    this.setState({ selectedBooch: selectedBooch });
  };

  handleEditingBoochInList = (boochToEdit) => {
    const { dispatch } = this.props;
    const action = a.addBooch(boochToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedBooch: null,
    });
  };

  handleSellBooch = (id) => {
    const selectedBooch = this.state.masterBoochList.filter(
      (booch) => booch.id === id
    )[0];
    if (selectedBooch.amountLeft > 0) {
      selectedBooch.amountLeft -= 1;
    } else {
      selectedBooch.amountLeft = "All Out";
    }
    this.setState({ selectedBooch: selectedBooch });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = (
        <EditBoochForm
          booch={this.state.selectedBooch}
          onEditBooch={this.handleEditingBoochInList}
        />
      );
      buttonText = "Return to Booch List";
    } else if (this.state.selectedBooch != null) {
      currentlyVisibleState = (
        <BoochDetail
          booch={this.state.selectedBooch}
          onClickingDelete={this.handleDeletingBooch}
          onClickingEdit={this.handleEditClick}
          onClickingSell={this.handleSellBooch}
        />
      );
      buttonText = "Return to Booch List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewBoochForm onNewBoochCreation={this.handleAddNewBooch} />
      );
      buttonText = "Return to Booch List";
    } else {
      currentlyVisibleState = (
        <BoochList
          boochList={this.props.masterBoochList}
          onBoochSelection={this.handleChangingSelectedBooch}
        />
      );
      buttonText = "Add Booch";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className="btn btn-primary" onClick={this.handleClick}>
          {buttonText}
        </button>
      </React.Fragment>
    );
  }
}

BoochControl.propTypes = {
  masterBoochList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
};
const mapStateToProps = (state) => {
  return {
    masterBoochList: state.masterBoochList,
    formVisibleOnPage: state.formVisibleOnPage,
  };
  
};

BoochControl = connect(mapStateToProps)(BoochControl);

export default BoochControl;
