import React, { Component } from "react";
import GifModal from "./gifModal";
import Favorites from "./favorites";

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      favorites: []
    };
  }

  open = () => {
    this.setState({ open: !this.state.open });
  };

  close = () => {
    this.setState({ open: !this.state.open });
  };

  // AddToFavorites = event => {
  //   event.preventDefault();
  //   this.setState({
  //     favorites: [
  //       ...this.state.favorites,
  //       {
  //         title: this.props.gif.title,
  //         fixed_width: this.props.gif.images.fixed_width.url,
  //         fixed_width_still: this.props.gif.images.fixed_width_still.url,
  //         rating: this.props.gif.rating,
  //         original: this.props.gif.images.original.url,
  //         import_datetime: this.props.gif.import_datetime
  //       }
  //     ]
  //   });
  //   localStorage.setItem("favorites", this.state.favorites);
  // };

  render() {
    return (
      <div>
        <GifModal
          AddToFavorites={this.props.AddToFavorites}
          open={this.state.open}
          close={this.close}
          gif={this.props.gif}
          index={this.props.index}
        />
        {this.props.gifsOn ? (
          <img
            src={this.props.gif.images.fixed_width.url}
            onClick={this.open}
          />
        ) : (
          <img
            src={this.props.gif.images.fixed_width_still.url}
            onClick={this.open}
          />
        )}
      </div>
    );
  }
}

export default Gif;
