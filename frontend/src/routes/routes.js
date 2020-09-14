import React from "react";
import { Switch, Route } from "react-router-dom";
import ToListUsers from "../components/ToListUsers";
import Home from "../components/Home";
import ToAddUser from "../components/ToAddUser";
import Login from "./../components/Login";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/users">
        <ToListUsers />
      </Route>
      <Route exact path="/create-user">
        <ToAddUser />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
}

export default Routes;
