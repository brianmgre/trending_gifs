import React, { Component } from "react";

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  clickHandler = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div onClick={this.clickHandler}>
        {this.state.open ? (
          <img src={this.props.gif.images.original.url} />
        ) : (
          <img src={this.props.gif.images.preview_gif.url} />
        )}
      </div>
    );
  }
}

export default Gif;
