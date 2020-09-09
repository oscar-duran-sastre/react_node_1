import postUser from "./create/postUser";
import getUsers from "./read/getUsers";
import getUser from "./read/getUser";
import putUser from "./update/putUser";
import putLogin from "./update/putLogin";
import getStatistics from "./read/getStatistics";

const users = (app) => {
  app.post("/users", postUser);
  app.get("/users", getUsers);
  app.get("/users/:_id", getUser);
  app.put("/users/:_id", putUser);
  app.put("/login", putLogin);
  app.get("/statistics", getStatistics);
};

export default users;
