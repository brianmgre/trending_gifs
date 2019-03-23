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
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        {/* //     {this.state.open ? ( */}
        {/* //       <img src={this.props.gif.images.original.url} />
    //     ) : (
    //       <img src={this.props.gif.images.fixed_width_still.url} />
    //     )} */}

        <GifModal
          open={this.state.open}
          close={this.close}
          gif={this.props.gif}
        />
        <img
          src={this.props.gif.images.fixed_width_still.url}
          onClick={this.open}
        />
      </div>
    );
  }
}

export default Gif;
