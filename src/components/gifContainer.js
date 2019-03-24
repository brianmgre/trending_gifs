import React, { Component } from "react";
import GifList from "./gifList";
import ToggleForm from "./toggleForm";
import Search from "./search";
import Sort from "./sort";

const giphyApi = process.env.REACT_APP_API;
const GphApiClient = require("giphy-js-sdk-core");
const client = GphApiClient(`${giphyApi}`);
const gifLimit = 24;

class GifContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      gifsOn: false,
      searchResults: [],
      searchTerm: ""
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

  searchForGif = event => {
    event.preventDefault();
    if (this.state.searchTerm != "") {
      client
        .search(`gifs`, { q: `${this.state.searchTerm}` })
        .then(res => {
          if (res.meta.status === 200) {
            this.setState({ searchResults: res.data });
          }
        })
        .catch(err => {
          console.log(err, "Results could not be found");
        });
    } else {
      this.componentDidMount();
    }
  };

  handleSearch = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  componentDidUpdate(preProps, preState) {
    if (preState.searchTerm !== this.state.searchTerm) {
      this.setState({ searchResults: [] });
    }
  }

  render() {
    console.log("gif state", this.state);
    return (
      <div>
        <Sort />
        <ToggleForm
          handleChange={this.handleChange}
          gifsOn={this.state.gifsOn}
        />
        <Search
          searchTerm={this.state.searchTerm}
          handleSearch={this.handleSearch}
          searchForGif={this.searchForGif}
        />
        <GifList
          gifs={
            this.state.searchTerm && this.state.searchResults.length > 0
              ? this.state.searchResults
              : this.state.gifs
          }
          gifsOn={this.state.gifsOn}
        />
      </div>
    );
  }
}

export default GifContainer;
