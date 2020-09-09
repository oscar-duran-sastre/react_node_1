import getClient from "./../../mongo_client/index";

const postUser = async (req, res) => {
  const client = getClient();

  // const validLength2To40 = (str) => str.length >= 2 && str.length <= 40;
  // const validLength6To14 = (str) => str.length >= 6 && str.length <= 14;
  // const validLength1To3 = (str) => str.length >= 1 && str.length <= 3;
  // const validLength8To12 = (str) => str.length >= 8 && str.length <= 12;

  // const validString = (str) => {
  //   typeof str === "string";
  // };

  try {
    await client.connect();
    const database = client.db("react_node");
    const collection = database.collection("first_test");

    const result = await collection.insertOne(req.body);
    res.send(result.insertedId);
  } catch (error) {
    console.error("ERROR: ", error);
    res.status(500);
    res.send({ error: "Fatal error" });
  } finally {
    client.close();
  }
};

export default postUser;

// POST http://localhost:3000/users
// {
//   "name": "Pepito",
//   "surname": "Grillo",
//   "email": "pepitogrillo@abc.com",
//   "password": "1234",
//   "phone": {
//       "countryCode": 69,
//       "number": 987654321
//   },
//   "condition": "infected"
//   }
