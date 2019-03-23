import React from "react";

const GifList = props => {
  const gifInfo = props.gifs.map(gif => (
    <div key={gif.id}>
      <p>{gif.title}</p>
      <img src={gif.images.downsized.url} alt="Trending Gifs" />
    </div>
  ));

  return (
    <div>
      <p>titles</p>
      {gifInfo}
    </div>
  );
};

export default GifList;
