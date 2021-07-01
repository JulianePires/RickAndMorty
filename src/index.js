import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Home } from "./pages/home";
import Character from "./pages/character";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const Paths = {
  HOME: "/",
  CHARACTER: "/:character_id",
};

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path={Paths.HOME} component={Home} />
      <Route exact path={Paths.CHARACTER} component={Character} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
