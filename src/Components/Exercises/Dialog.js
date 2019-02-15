import React, { Component, Fragment } from "react";
import {
  Fab,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Form from "./Form";
import { withContext } from "../../context";

class CreateDialog extends Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleFormSubmit = exercise => {
    this.handleToggle();

    this.props.onCreate(exercise);
  };

  render() {
    const { open } = this.state,
      { muscles } = this.props;

    return (
      <Fragment>
        <Fab
          variant="extended"
          size="medium"
          onClick={this.handleToggle}
          color="secondary"
        >
          <Add /> Add Exercise
        </Fab>
        <Dialog open={open} onClose={this.handleToggle} fullWidth maxWidth="sm">
          <DialogTitle>Create a new Exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below.
            </DialogContentText>
            <Form muscles={muscles} onSubmit={this.handleFormSubmit} />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default withContext(CreateDialog);
