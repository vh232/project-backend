const { Seeder } = require("mongo-seeding");
const path = require("path");

const config = {
  database: "mongodb+srv://vicky:vicky@cluster0.navhegp.mongodb.net/blockingApp",
  dropDatabase: true,
};

const seeder = new Seeder(config);

const collections = seeder.readCollectionsFromPath(
  path.resolve(`${__dirname}/../collections`)
);

seeder
  .import(collections)
  .then(() => {
    console.log("Database seeded?");
  })
  .catch((err) => {
    console.log(err);
  });
