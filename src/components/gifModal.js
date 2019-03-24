import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { DialogContent } from "@material-ui/core";

const GifModal = props => {
  // console.log(props.gif);
  const { classes, close, AddToFavorites, ...other } = props;

  return (
    <Dialog {...other}>
      <i className="material-icons" onClick={AddToFavorites(props.index)}>
        favorite
      </i>
      <DialogTitle onClick={close}>{props.gif.title}</DialogTitle>
      <DialogContent>
        <img src={props.gif.images.original.url} alt={props.gif.title} />
      </DialogContent>
      Rating: {props.gif.rating.toUpperCase()}
    </Dialog>
  );
};

export default GifModal;
