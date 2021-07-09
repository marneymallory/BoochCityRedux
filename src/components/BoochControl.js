import React from "react";
import NewBoochForm from "./NewBoochForm";
import BoochList from "./BoochList";
import BoochDetail from "./BoochDetail";
import EditBoochForm from "./EditBoochForm";

class BoochControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterBoochList: [],
      selectedBooch: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedBooch != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBooch: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleAddNewBooch = (newBooch) => {
    const newMasterBoochList = this.state.masterBoochList.concat(newBooch);
    this.setState({
      masterBoochList: newMasterBoochList,
      formVisibleOnPage: false,
    });
  };

  handleDeletingBooch = (id) => {
    const newMasterBoochList = this.state.masterBoochList.filter(
      (booch) => booch.id !== id
    );
    this.setState({
      masterBoochList: newMasterBoochList,
      selectedBooch: null,
    });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleChangingSelectedBooch = (id) => {
    const selectedBooch = this.state.masterBoochList.filter(
      (booch) => booch.id === id
    )[0];
    this.setState({ selectedBooch: selectedBooch });
  };

  handleEditingBoochInList = (boochToEdit) => {
    const editedMasterBoochList = this.state.masterBoochList
      .filter((booch) => booch.id !== this.state.selectedBooch.id)
      .concat(boochToEdit);
    this.setState({
      masterBoochList: editedMasterBoochList,
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
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewBoochForm onNewBoochCreation={this.handleAddNewBooch} />
      );
      buttonText = "Return to Booch List";
    } else {
      currentlyVisibleState = (
        <BoochList
          boochList={this.state.masterBoochList}
          onBoochSelection={this.handleChangingSelectedBooch}
          onClickSellBooch={this.handleSellBooch}
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

export default BoochControl;
