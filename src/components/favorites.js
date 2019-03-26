import React from "react";
import Grid from "@material-ui/core/Grid";

const Favorites = props => {
  const favs = (
    <Grid container spacing={8}>
      {props.favorites.map((fav, index) => (
        <Grid item lg={4} xs={12} md={5} sm={6} key={index}>
          <i className="material-icons" onClick={props.removeFavorite(index)}>
            delete_outline
          </i>
          <img
            src={props.gifsOn ? fav.original : fav.original_still}
            alt={fav.title}
          />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <div>
      Your Favorite Gifs!
      {favs}
    </div>
  );
};

export default Favorites;
