import getClient from "./../../mongo_client/index";

const putLogin = async (req, res) => {
  const client = getClient();

  try {
    await client.connect();
    const database = client.db("second_coder_challenge");
    const collection = database.collection("users");

    let email = {};
    email.email = req.query.email;
    const findUserByEmail = await collection.findOne(email);

    let password = {};
    password.password = parseInt(req.query.password);
    const findUserByPassword = await collection.findOne(password);

    let result;
    findUserByEmail && findUserByPassword
      ? ((result = findUserByEmail._id),
        await collection.updateOne(email, { $set: { lastLogin: new Date() } }))
      : (result = "email o contraseñas inválidos");

    res.send(result);
  } catch (error) {
    console.error("ERROR: ", error);
    res.status(500);
    res.send({ error: "Fatal error" });
  } finally {
    client.close();
  }
};

export default putLogin;

// PUT http://localhost:3000/login?email=oscard@abc.com&password=1278
