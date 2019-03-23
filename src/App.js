import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GifContainer from "./components/gifContainer";

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
