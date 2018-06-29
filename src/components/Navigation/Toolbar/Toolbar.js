import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";

import Logo from "../../Logo/Logo";

import classes from "./Toolbar.css";

const Toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <Logo />
      <NavigationItems />
    </header>
  );
};

export default Toolbar;
