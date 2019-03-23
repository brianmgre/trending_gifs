import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

const GifModal = props => {
  const { classes, close, ...other } = props;

  const url = `https://twitter.com/share?ref_src=twsrc%5Etfw"`;
  return (
    <Dialog {...other} onClick={close}>
      <DialogTitle>
        <img src={props.gif.images.original.url} ath />
      </DialogTitle>
    </Dialog>
  );
};

export default GifModal;
