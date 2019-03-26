import React from "react";
import { styles } from "./styles/gifContainerStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Navigation from "./navigation";
import Typography from "@material-ui/core/Typography";
import ToggleForm from "./toggleForm";

const Header = props => {
  const { classes } = props;
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Navigation />
        <Typography variant="h2" className={classes.logo}>
          Gifs on Gifs
        </Typography>
        <ToggleForm handleChange={props.handleChange} gifsOn={props.gifsOn} />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);