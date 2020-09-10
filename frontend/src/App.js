import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";
import NavbarTop from "./components/NavbarTop";
import Body from "./components/Body";

function App() {
  return (
    <>
      <NavbarTop />
      <Router>
        <Body>
          <Routes />
        </Body>
      </Router>
    </>
  );
}

export default App;
