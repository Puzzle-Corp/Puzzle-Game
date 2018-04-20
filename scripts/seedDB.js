const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the category collection and inserts the category below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/puzzledb",
  {
    useMongoClient: true
  }
);
/*
const categorySeed = [
  {
    name: "Jigsaw Puzzle",
    parentCatName:"Root",
    catLevel: 0,
    date: new Date(Date.now())
  },
  {
    name: "Word puzzle",
    parentCatName:"Root",
    catLevel: 0,
    date: new Date(Date.now())
  },
  {
    name: "Animals",
    parentCatName:"Jigsaw Puzzle",
    catLevel: 1,
    date: new Date(Date.now())
  },
  {
    name: "Nature",
    parentCatName:"Jigsaw Puzzle",
    catLevel: 1,
    date: new Date(Date.now())
  },
]

db.Category
  .remove({})
  .then(() => db.Category.collection.insertMany(categorySeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  }); 
*/
  const gameSeed = [
    {
      name: "Game-1 Animal",
      date: new Date(Date.now())
    },
    {
      name: "Game-2 Nature",
      date: new Date(Date.now())
    },
  ]
  
  db.Game
    .remove({})
    .then(() => db.Game.collection.insertMany(gameSeed))
    .then(data => {
      console.log(data.insertedIds.length + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    }); 
  

