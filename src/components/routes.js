import React from "react";
import { Switch, Route } from "react-router-dom";
import GifContainer from "./gifContainer";
import Favorites from "./favorites";
import Navigation from "./navigation";

const Routes = props => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={GifContainer} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </div>
  );
};

export default Routes;
