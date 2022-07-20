import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className={"navbar"}>
    <NavLink to="/">
      Home
    </NavLink>
    <NavLink to="/movies">
    <br></br>Movies
    </NavLink>
    <NavLink to="/directors">
    <br></br>Directors
    </NavLink>
    <NavLink to="/actors">
    <br></br>Actors
    </NavLink>
  </div>;
}

export default NavBar;
