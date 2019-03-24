import React, { Component } from "react";
import GifList from "./gifList";
import ToggleForm from "./toggleForm";

const giphyApi = process.env.REACT_APP_API;
const GphApiClient = require("giphy-js-sdk-core");
const client = GphApiClient(`${giphyApi}`);
const gifLimit = 24;

class GifContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      gifsOn: false
    };
  }

  componentDidMount() {
    client
      .trending("gifs", { limit: gifLimit })
      .then(res => {
        console.log("response", res);
        if (res.meta.status === 200) {
          this.setState({ gifs: res.data });
        }
      })
      .catch(err => {
        console.log(err, "error");
      });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    console.log("gif state", this.state);
    return (
      <div>
        <ToggleForm
          handleChange={this.handleChange}
          checked={this.state.gifsOn}
        />
        <GifList gifs={this.state.gifs} gifsOn={this.state.gifsOn} />
      </div>
    );
  }
}

export default GifContainer;
