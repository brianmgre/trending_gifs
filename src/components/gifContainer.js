import React, { Component } from "react";
import axios from "axios";
import GifList from "./gifList";

const url = process.env.REACT_APP_GIF_URL;
const giphyApi = process.env.REACT_APP_API;
const GphApiClient = require("giphy-js-sdk-core");
const client = GphApiClient(`${giphyApi}`);
const gifLimit = 20;

class GifContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
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

  render() {
    console.log("gif state", this.state);
    return (
      <div>
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifContainer;
