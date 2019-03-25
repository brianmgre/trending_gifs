import React from "react";
import { GridList, GridListTile } from "@material-ui/core";

const Favorites = props => {
  console.log("wtf", props);

  const favs = (
    <GridList cellHeight={300} cols={3}>
      {props.favorites.map((fav, index) => (
        <GridListTile key={index}>
          <i className="material-icons" onClick={props.removeFavorite(index)}>
            delete_outline
          </i>
          <img
            src={props.gifsOn ? fav.original : fav.original_still}
            alt={fav.title}
          />
        </GridListTile>
      ))}
    </GridList>
  );

  return (
    <div>
      Your Favorite Gifs!
      {favs}
    </div>
  );
};

export default Favorites;
