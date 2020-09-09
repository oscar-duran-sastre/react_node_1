import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Row } from "reactstrap";
import ToListUsers from "./ToListUsers";
import Home from "./Home";

function Routes() {
  return (
    <Container>
      <Row>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/abc">
            <ToListUsers />
          </Route>
          {/* <Route exact path="/users/:id">
            <ToListOneUser />
          </Route>
          <Route exact path="/users">
            <ToCreateNewUser />
          </Route> */}
        </Switch>
      </Row>
    </Container>
  );
}

export default Routes;
