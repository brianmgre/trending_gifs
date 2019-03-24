import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { DialogContent } from "@material-ui/core";

const GifModal = props => {
  const { classes, close, ...other } = props;

  return (
    <Dialog {...other} onClick={close}>
      <DialogTitle>{props.gif.title}</DialogTitle>
      <DialogContent>
        <img src={props.gif.images.original.url} alt={props.gif.title} />
      </DialogContent>
      Rating: {props.gif.rating}
    </Dialog>
  );
};

export default GifModal;
