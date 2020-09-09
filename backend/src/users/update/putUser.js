import getClient from "./../../mongo_client/index";
import { ObjectId } from "mongodb";

const putUser = async (req, res) => {
  const client = getClient();

  try {
    await client.connect();
    const database = client.db("second_coder_challenge");
    const collection = database.collection("users");

    const query = {};
    let result;

    if (req.params) {
      query._id = new ObjectId(req.params._id);
    }

    if (req.query.setCondition) {
      await collection.updateOne(query, {
        $set: { condition: req.query.setCondition },
      }),
        await collection.updateOne(query, {
          $set: { lastUpdate: new Date() },
        }),
        (result = "actualización aplicada con éxito");
    }

    if (req.query.setPhone) {
      await collection.updateOne(query, {
        $set: { phone: req.query.setPhone },
      }),
        await collection.updateOne(query, {
          $set: { lastUpdate: new Date() },
        }),
        (result = "actualización aplicada con éxito");
    }

    res.send(result);
  } catch (error) {
    console.error("ERROR: ", error);
    res.status(500);
    res.send({ error: "Fatal error" });
  } finally {
    client.close();
  }
};

export default putUser;

// PUT http://localhost:3000/users/5f52018e87d7b548502c2914?setCondition=infected
// PUT http://localhost:3000/users/5f52010987d7b548502c2912?setPhone=555666999
