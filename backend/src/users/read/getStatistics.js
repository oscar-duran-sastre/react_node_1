import getClient from "./../../mongo_client/index";

const getStatistics = async (req, res) => {
  const client = getClient();

  try {
    await client.connect();
    const database = client.db("react_node");
    const collection = database.collection("first_test");

    const lastUpdatedUser = await collection.findOne(
      {},
      { sort: { _id: -1 }, limit: 1 }
    );

    const result = await collection
      .aggregate([
        { $sort: { lastUpdate: 1 } },
        { $group: { _id: "$condition", total: { $sum: 1 } } },
        {
          $addFields: {
            lastUpdated: lastUpdatedUser.lastUpdate,
          },
        },
      ])
      .toArray();
    // .aggregate([
    //   { $sort: { lastUpdate: 1 } },
    //   { $group: { _id: "$condition", total: { $sum: 1 } } },
    //   {
    //     $addFields: {
    //       lastUpdated: { $last: "$lastUpdate" },
    //     },
    //   },
    // ])
    // .toArray();

    res.send(result);
  } catch (error) {
    console.error("ERROR: ", error);
    res.status(500);
    res.send({ error: "Fatal error" });
  } finally {
    client.close();
  }
};

export default getStatistics;

// GET http://localhost:3000/statistics
