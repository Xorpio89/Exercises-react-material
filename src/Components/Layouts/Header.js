import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CreateDialog from "../Exercises/Dialog";

const styles = {
  flex: {
    flex: 1
  }
};

export default withStyles(styles)(({ classes }) => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" color="inherit" className={classes.flex}>
          Exercise Database
        </Typography>
        <CreateDialog />
      </Toolbar>
    </AppBar>
  </div>
));
