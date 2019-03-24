import React from "react";
import Gif from "./gif";
import Grid from "@material-ui/core/Grid";
import { GridList, GridListTile, DialogTitle } from "@material-ui/core";

const GifList = props => {
  const { classes } = props;
  return (
    // <Grid container spacing={24}>
    //   {props.gifs.map(gif => (
    //     <Grid item lg={2} xs={6} md={6} key={gif.id}>
    //       <Gif gif={gif} gifsOn={props.gifsOn} />
    //     </Grid>
    //   ))}
    // </Grid>

    <GridList cellHeight={160} cols={5}>
      {props.gifs.map(gif => (
        <GridListTile cols={1} key={gif.id}>
          <Gif gif={gif} gifsOn={props.gifsOn} />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default GifList;
