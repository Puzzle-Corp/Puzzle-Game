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

//Step 2
/*
const gameSeed = [
  {
    parentCatName: "Jigsaw Puzzle",
    name: "Animals",
    gameList: [
      {
        name: "Duck",
        date: new Date(Date.now())
      },
      {
        name: "Catfish",
        date: new Date(Date.now())
      },
    ]
  },
  {

    parentCatName: "Jigsaw Puzzle",
    name: "Nature",
    gameList: [
      {
        name: "Game-1 Nature",
        date: new Date(Date.now())
      },
      {
        name: "Game-2 Nature",
        date: new Date(Date.now())
      },
      {
        name: "Game-3 Nature",
        date: new Date(Date.now())
      },
    ]
  },
]

var i = 0;
gameSeed.forEach(function (p) {
  p.gameList.forEach(function (a) {
    db.Game.collection.insertOne(a, function (err, data) {
      db.Category.collection.findOneAndUpdate({ name: p.name}, { $push: { games: data.insertedId } }, { new: true });
      console.log(data.insertedId);
      i++;
      console.log(i);
    });
  });
});

*/
/*
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
*/
// Step 1
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
    date: new Date(Date.now()),
  },
  {
    name: "Nature",
    parentCatName:"Jigsaw Puzzle",
    catLevel: 1,
    date: new Date(Date.now()),
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
//Step 3

const gameAssetsSeed = [
  {
    gameName: "Duck",
    assetList: [
      {
        position: "randomBoard",
        url: "./Game-1/0-0.jpg",
        coordinate: "0-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "./Game-1/0-1.jpg",
        coordinate: "0-1",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "./Game-1/1-0.jpg",
        coordinate: "1-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "./Game-1/1-1.jpg",
        coordinate: "1-1",
        isPlaced: 0,
      },
    ]
  },
  {
    gameName: "Game-2 Nature",
    assetList: [
      {
        position: "randomBoard",
        url: "./Game-2/0-0.jpg",
        coordinate: "0-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "./Game-2/0-1.jpg",
        coordinate: "0-1",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "./Game-2/0-2.jpg",
        coordinate: "0-2",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "./Game-2/0-3.jpg",
        coordinate: "0-3",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "./Game-2/1-0.jpg",
        coordinate: "1-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "./Game-2/1-1.jpg",
        coordinate: "1-1",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "./Game-2/1-2.jpg",
        coordinate: "1-2",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "./Game-2/1-3.jpg",
        coordinate: "1-3",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "./Game-2/2-0.jpg",
        coordinate: "2-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "./Game-2/2-1.jpg",
        coordinate: "2-1",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "./Game-2/2-2.jpg",
        coordinate: "2-2",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "./Game-2/2-3.jpg",
        coordinate: "2-3",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "./Game-2/3-0.jpg",
        coordinate: "3-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "./Game-2/3-1.jpg",
        coordinate: "3-1",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "./Game-2/3-2.jpg",
        coordinate: "3-2",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "./Game-2/3-3.jpg",
        coordinate: "3-3",
        isPlaced: 0,
      },
    ]
  },
]
var i = 0;
gameAssetsSeed.forEach(function (p) {
  p.assetList.forEach(function (a) {
    db.GameAsset.collection.insertOne(a, function (err, data) {
      db.Game.collection.findOneAndUpdate({ name: p.gameName }, { $push: { assets: data.insertedId } }, { new: true });
      i++;
      console.log(i);
    });
  });
});


/*
db.GameAsset
  .remove({})
  .then(() => db.GameAsset.collection.insertMany(gameAssetsSeed))
  .then(function (dbAsset) {

    //dbAsset.ops.map(p=> { console.log(p._id);

    //db.Game.collection.findOneAndUpdate({name:p.gameName},{$push:{assets:p._id}},{new:true});

    //});

    console.log(dbAsset);
    return db.Game.collection.findOneAndUpdate({ name: "Game-2 Nature" }, { $push: { assets: dbAsset.insertedIds } }, { new: true });
  })
  .then(data => {
    console.log(" records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


*/


