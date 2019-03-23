import React from "react";
import { Switch, Route } from "react-router-dom";
import GifContainer from "./gifContainer";
import Favorites from "./favorites";

const Routes = props => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={GifContainer} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </div>
  );
};

export default Routes;
