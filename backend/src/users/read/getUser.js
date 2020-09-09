import getClient from "./../../mongo_client/index";
import { ObjectId } from "mongodb";
import FIND_OPTIONS from "./../constants";

const getUser = async (req, res) => {
  const client = getClient();

  try {
    await client.connect();
    const database = client.db("react_node");
    const collection = database.collection("first_test");

    const query = {};

    if (req.params) {
      query._id = new ObjectId(req.params._id);
    }

    const result = await collection.findOne(query, FIND_OPTIONS);
    res.send(result);
  } catch (error) {
    console.error("ERROR: ", error);
    res.status(500);
    res.send({ error: "Fatal error" });
  } finally {
    client.close();
  }
};

export default getUser;

// GET http://localhost:3000/users/5f51f095fd51264a3c2578df
