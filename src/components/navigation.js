import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = props => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </div>
  );
};

export default Navigation;
