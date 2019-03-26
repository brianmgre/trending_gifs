import React, { Component } from "react";
import GifList from "./gifList";
import ToggleForm from "./toggleForm";
import Search from "./search";
import Favorites from "./favorites";
import { Route } from "react-router-dom";
import Navigation from "./navigation";
import InfiniteScroll from "react-infinite-scroll-component";
import LinearProgress from "@material-ui/core/LinearProgress";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "./styles/gifContainerStyles";
import Typography from "@material-ui/core/Typography";

const giphyApi = process.env.REACT_APP_API;
const GphApiClient = require("giphy-js-sdk-core");
const client = GphApiClient(`${giphyApi}`);
const gifLimit = 30;

class GifContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      gifsOn: false,
      searchResults: [],
      searchTerm: "",
      favorites: [],
      sorted: false,
      hasMore: true
    };
  }

  componentDidMount() {
    client
      .trending("gifs", { limit: gifLimit })
      .then(res => {
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

  //load more data
  fetchMoreData = () => {
    if (this.state.gifs.length >= 130) {
      this.setState({ hasMore: false });
      return;
    }

    setTimeout(() => {
      client
        .trending("gifs", { limit: this.state.gifs.length + gifLimit })
        .then(res => {
          if (res.meta.status === 200) {
            this.setState({ gifs: res.data });
          }
        })
        .catch(err => {
          console.log(err, "error");
        });
    }, 700);
  };

  //search for gif
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

  //turn gifs on/off
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  //removed favorite from favorite array
  removeFavorite = index => event => {
    event.preventDefault();
    const remove = this.state.favorites[index];
    if (index >= 0) {
      const newFav = this.state.favorites.filter(function(i) {
        return i !== remove;
      });
      this.setState({ favorites: newFav });
    }
  };

  //sort array by import date
  sortArray = () => {
    const sortFunction = (a, b) => {
      if (!this.state.sorted) {
        return b.import_datetime - a.import_datetime;
      } else {
        return a.import_datetime - b.import_datetime;
      }
    };
    const sortedArray = this.state.gifs.sort(sortFunction);
    this.setState({ gifs: sortedArray, sorted: !this.state.sorted });
  };

  // clears search results when search is cleared and updates localstorage with favorites
  componentDidUpdate(preProps, preState) {
    if (preState.searchTerm !== this.state.searchTerm) {
      this.setState({ searchResults: [] });
    } else if (preState.favorites !== this.state.favorites) {
      localStorage["favorites"] = JSON.stringify(this.state.favorites);
    }
  }

  //checks favorite array by id
  checkInFav = id => {
    function checkIfAlreadyAdded(fav) {
      return fav.id === id;
    }
    return this.state.favorites.find(checkIfAlreadyAdded);
  };

  //adds favorites to favorite array
  AddToFavorites = id => event => {
    event.preventDefault();
    if (this.checkInFav(id) === undefined) {
      client.gifByID(`${id}`).then(res => {
        if (res.meta.status === 200) {
          this.setState({
            favorites: [
              ...this.state.favorites,
              {
                id: res.data.id,
                title: res.data.title,
                original_still: res.data.images.original_still.url,
                original: res.data.images.original.url,
                rating: res.data.rating,
                import_datetime: res.data.import_datetime
              }
            ]
          });
        }
      });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Navigation />
            <Typography variant="h2" className={classes.logo}>
              Gifs on Gifs
            </Typography>
            <ToggleForm
              handleChange={this.handleChange}
              gifsOn={this.state.gifsOn}
            />
          </Toolbar>
        </AppBar>

        <div className={classes.searchSort}>
          <div className={classes.sort}>
            <i
              className="material-icons"
              onClick={this.sortArray}
              style={{ fontSize: 40, color: "#00AAE7" }}
            >
              sort
            </i>
            <Typography variant="h2" className={classes.sortLabel}>
              sort
            </Typography>
          </div>

          <Search
            searchTerm={this.state.searchTerm}
            handleSearch={this.handleSearch}
            searchForGif={this.searchForGif}
          />
        </div>

        <InfiniteScroll
          className={classes.infiniteScoll}
          style={{ overflow: "hidden" }}
          dataLength={this.state.gifs.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={
            <div>
              <br />
              <LinearProgress />
              <br />
              <LinearProgress />
              <br />
            </div>
          }
        >
          <Route
            exact
            path="/favorites"
            render={props => {
              return (
                <Favorites
                  {...props}
                  gifsOn={this.state.gifsOn}
                  favorites={this.state.favorites}
                  removeFavorite={this.removeFavorite}
                />
              );
            }}
          />

          <Route
            exact
            path="/"
            render={props => {
              return (
                <GifList
                  {...props}
                  gifs={
                    this.state.searchResults.length > 0
                      ? this.state.searchResults
                      : this.state.gifs
                  }
                  gifsOn={this.state.gifsOn}
                  AddToFavorites={this.AddToFavorites}
                />
              );
            }}
          />
        </InfiniteScroll>
      </div>
    );
  }
}

export default withStyles(styles)(GifContainer);
