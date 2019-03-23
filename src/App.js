import React, { Component } from "react";
import "./App.css";
import Routes from "./components/routes";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    secondary: {
      main: "#3A54B4"
    },

    primary: {
      main: "#fef7ed"
    }
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
