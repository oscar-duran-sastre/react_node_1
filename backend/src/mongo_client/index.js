import { MongoClient } from "mongodb";
const dotenv = require("dotenv");
dotenv.config();

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PSW}@${process.env.MONGO_URL}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

const getClient = () => {
  return new MongoClient(uri, { useUnifiedTopology: true });
};

export default getClient;
