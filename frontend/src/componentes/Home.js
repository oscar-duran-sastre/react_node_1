import React from "react";
import "./Home.css";
import ToAddUser from "./ToAddUser";
import ToListUsers from "./ToListUsers";

const Home = (props) => {
  return (
    <div>
      <ToAddUser />
      <ToListUsers />
    </div>
  );
};

export default Home;
