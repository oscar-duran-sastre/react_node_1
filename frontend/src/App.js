import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";
import NavbarTop from "./components/NavbarTop";
import Body from "./components/Body";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <>
      <NavbarTop />
      <Container>
        <Row>
          <Col xs={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
            <Router>
              <Body>
                <Routes />
              </Body>
            </Router>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
