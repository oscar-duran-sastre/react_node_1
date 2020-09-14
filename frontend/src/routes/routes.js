import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import ToListUsers from "../components/ToListUsers";
import Home from "../components/Home";
import ToAddUser from "../components/ToAddUser";

function Routes() {
  return (
    <Container>
      <Row>
        <Col xs={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
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
            {/* <Route exact path="/users">
              <ToCreateNewUser />
            </Route> */}
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}

export default Routes;
