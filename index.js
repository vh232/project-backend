require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const routes = require("./routes/routes");
const { Seeder } = require("mongo-seeding");
const path = require("path");

const config = {
  database: "mongodb+srv://vicky:vicky@cluster0.navhegp.mongodb.net/blockingApp",
  dropDatabase: true,
};
const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(
  path.resolve(`${__dirname}/db/collections`), () => {
  }
);

mongoose.connect(mongoString, {
  dbName: "blockingApp",
});
const database = mongoose.connection;

database.on("connected", () => {
  


seeder
  .import(collections)
  .then(() => {
    console.log("Database seeded?");
  })
  .catch((err) => {
    console.log(err);
  });
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();

app.use(express.json());
app.use("/api", routes);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
