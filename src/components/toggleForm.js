import React, { Component } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

class ToggleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // checked: true
    };
  }

  render() {
    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={this.props.checked}
              onChange={this.props.handleChange}
              value={this.props.checked}
              name="gifsOn"
            />
          }
          label="Turn on Gifs"
        />
      </FormGroup>
    );
  }
}

export default ToggleForm;
