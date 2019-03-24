import React, { Component } from "react";
import GifList from "./gifList";
import ToggleForm from "./toggleForm";
import Search from "./search";
import Favorites from "./favorites";

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
      searchTerm: "",
      favorites: [],
      showFavorites: true
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
      .then(res => {
        if (localStorage.getItem("favorites")) {
          const storedFav = JSON.parse(localStorage["favorites"]);
          this.setState({ favorites: storedFav });
        }
      })
      .catch(err => {
        console.log(err, "error");
      });
  }

  searchForGif = event => {
    event.preventDefault();
    if (this.state.searchTerm !== "") {
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
    } else if (preState.favorites !== this.state.favorites) {
      localStorage["favorites"] = JSON.stringify(this.state.favorites);
    }
  }

  AddToFavorites = index => event => {
    event.preventDefault();
    if (index) {
      this.setState({
        favorites: [
          ...this.state.favorites,
          {
            id: this.state.gifs[index].id,
            title: this.state.gifs[index].title,
            original: this.state.gifs[index].images.original.url,
            rating: this.state.gifs[index].rating,
            import_datetime: this.state.gifs[index].import_datetime
          }
        ]
      });
    }
  };

  render() {
    console.log("gif state", this.state);
    return (
      <div>
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
            this.state.searchResults.length > 0
              ? this.state.searchResults
              : this.state.gifs
          }
          gifsOn={this.state.gifsOn}
          AddToFavorites={this.AddToFavorites}
        />
        {/* <Favorites
          favorites={this.state.favorites}
          AddToFavorites={this.AddToFavorites}
        /> */}
      </div>
    );
  }
}

export default GifContainer;
