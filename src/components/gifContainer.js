import React, { Component } from "react";
import axios from "axios";

const url = process.env.REACT_APP_GIF_URL;
const giphyApi = process.env.REACT_APP_API;

class GifContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
  }

  componentDidMount() {
    axios
      .get(`${url}/v1/gifs/trending?api_key=${giphyApi}`)
      .then(res => {
        if (res.status === 200) {
          this.setState({ gifs: res.data });
        }
      })
      .catch(err => {
        console.log("error fetching data", err);
      });
  }

  render() {
    console.log("gif state", this.state);
    return <div>heyo</div>;
  }
}

export default GifContainer;
