import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const ToggleForm = props => {
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={props.gifsOn}
            onChange={props.handleChange("gifsOn")}
            value={props.gifsOn}
            name="gifsOn"
          />
        }
        label="Turn on Gifs"
      />
    </FormGroup>
  );
};

export default ToggleForm;
