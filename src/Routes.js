import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Main from "./pages/Main"
import Room from "./pages/Room"

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/room/:name" component={Room} />
    </Switch>
  </BrowserRouter>
);

export default Routes