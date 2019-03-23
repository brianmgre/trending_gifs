import React from "react";
import Gif from "./gif";

const GifList = props => {
  return (
    <div>
      {props.gifs.map(gif => (
        <Gif key={gif.id} gif={gif} />
      ))}
    </div>
  );
};

export default GifList;
