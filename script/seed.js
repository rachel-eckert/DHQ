"use strict";

const {
  db,
  models: { User, Results, Questions },
} = require("../server/db");

const userData = require("./data/user");
const questionsData = require("./data/questions");
const resultsData = require("./data/results");

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all(
    userData.map((data) => {
      return User.create(data);
    })
  );

  //Creating Questions
  const questions = await Promise.all(
    questionsData.map((data) => {
      return Questions.create(data);
    })
  );

  //Creating Results
  const results = await Promise.all(
    resultsData.map((data) => {
      return Results.create(data);
    })
  );

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${questions.length} questions`);
  console.log(`seeded ${results.length} results`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/

if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
