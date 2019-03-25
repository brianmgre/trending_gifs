import React, { Component } from "react";
import "./App.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import GifContainer from "./components/gifContainer";

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
        <GifContainer />
      </div>
    );
  }
}

export default App;
