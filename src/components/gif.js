import React, { Component } from "react";
import GifModal from "./gifModal";

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  open = () => {
    this.setState({ open: !this.state.open });
  };

  close = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div>
        <GifModal
          open={this.state.open}
          close={this.close}
          gif={this.props.gif}
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
