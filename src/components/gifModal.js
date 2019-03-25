import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { DialogContent } from "@material-ui/core";
import {
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  EmailShareButton,
  FacebookShareButton,
  EmailIcon
} from "react-share";

const GifModal = props => {
  const { classes, close, AddToFavorites, ...other } = props;

  return (
    <Dialog {...other}>
      <i className="material-icons" onClick={AddToFavorites(props.gif.id)}>
        favorite_border
      </i>
      <i className="material-icons" onClick={close}>
        close
      </i>
      <DialogTitle onClick={close}>{props.gif.title}</DialogTitle>
      <DialogContent>
        <img src={props.gif.images.original.url} alt={props.gif.title} />
      </DialogContent>
      <FacebookShareButton
        quote={props.gif.title}
        url={props.gif.images.original.url}
        round={true}
      >
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={props.gif.images.original.url}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <EmailShareButton
        url={props.gif.images.original.url}
        subject={props.gif.title}
        image={props.gif.images.original.url}
      >
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
      Rating: {props.gif.rating.toUpperCase()}
    </Dialog>
  );
};

export default GifModal;
