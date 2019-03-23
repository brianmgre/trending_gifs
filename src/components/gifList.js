import React from "react";
import Gif from "./gif";
import Grid from "@material-ui/core/Grid";

const GifList = props => {
  const { classes } = props;
  return (
    <Grid container spacing={24}>
      {props.gifs.map(gif => (
        <Grid item lg={2} xs={6} md={6} key={gif.id}>
          <Gif gif={gif} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GifList;
