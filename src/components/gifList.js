import React from "react";
import Gif from "./gif";
import { GridList, GridListTile, DialogTitle } from "@material-ui/core";

const GifList = props => {
  console.log(props);
  const { classes } = props;
  return (
    <GridList cellHeight={160} cols={6}>
      {props.gifs.map((gif, index) => (
        <GridListTile cols={1} key={gif.id}>
          <Gif
            gif={gif}
            gifsOn={props.gifsOn}
            AddToFavorites={props.AddToFavorites}
          />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default GifList;
