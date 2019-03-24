import React, { Component } from "react";
import GifList from "./gifList";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favGif: []
    };
  }

  componentDidMount() {
    if (localStorage.getItem("favorites")) {
      const storedFav = JSON.parse(localStorage["favorites"]);
      this.setState({ favGif: storedFav });
    }
  }

  render() {
    if (this.state.favGif.length === 0) {
      return <h1>loading!</h1>;
    }
    console.log(this.state);
    return (
      <div>
        Your Favorite Gifs!
        {this.state.favGif.map((fav, index) => (
          <div key={index}>hi</div>
        ))}
      </div>
    );
  }
}

export default Favorites;
