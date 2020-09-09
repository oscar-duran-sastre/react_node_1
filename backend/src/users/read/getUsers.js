import getClient from "./../../mongo_client/index";
import FIND_OPTIONS from "./../constants";

const getUsers = async (req, res) => {
  const client = getClient();

  try {
    await client.connect();
    const database = client.db("react_node");
    const collection = database.collection("first_test");

    let result;
    req.query.condition
      ? (result = await collection
          .find({}, OPTIONS)
          .filter({ condition: req.query.condition })
          .toArray())
      : (result = await collection.find({}, FIND_OPTIONS).toArray());

    res.send(result);
  } catch (error) {
    console.error("ERROR: ", error);
    res.status(500);
    res.send({ error: "Fatal error" });
  } finally {
    client.close();
  }
};

export default getUsers;

// GET http://localhost:3000/users
// GET http://localhost:3000/users?condition=infected
