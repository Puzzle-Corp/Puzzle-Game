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


// Step 1 - 1
/*
const categorySeed = [
  {
    name: "Jigsaw Puzzle",
    parentCatId:null,
    catLevel: 0,
    date: new Date(Date.now())
  },
  {
    name: "Word puzzle",
    parentCatId:null,
    catLevel: 0,
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


// Step 1 - 2

/*
var ObjectId = mongoose.Types.ObjectId,
 categorySeed = [
  //Jigsaw Puzzle
  {
    name: "Animals",
    parentCatId: ObjectId("5ade2f442f5ec8001e11e080"),
    catLevel: 1,
    date: new Date(Date.now()),
  },
  {
    name: "Nature",
    parentCatId: ObjectId("5ade2f442f5ec8001e11e080"),
    catLevel: 1,
    date: new Date(Date.now()),
  },
]


  db.Category.collection.insert(categorySeed, function (err, data) {

  });

*/



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
        name: "Tiger",
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
        name: "Tree",
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


//Step 3
/*
const gameAssetsSeed = [
  {
    gameName: "Duck",
    assetList: [
      {
        position: "randomBoard",
        url: "../Duck/0-0.jpg",
        coordinate: "0-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Duck/0-1.jpg",
        coordinate: "0-1",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Duck/1-0.jpg",
        coordinate: "1-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Duck/1-1.jpg",
        coordinate: "1-1",
        isPlaced: 0,
      },
    ]
  },
  {
    gameName: "Tree",
    assetList: [
      {
        position: "randomBoard",
        url: "../Tree/0-0.jpg",
        coordinate: "0-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tree/0-1.jpg",
        coordinate: "0-1",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tree/0-2.jpg",
        coordinate: "0-2",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tree/0-3.jpg",
        coordinate: "0-3",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tree/1-0.jpg",
        coordinate: "1-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tree/1-1.jpg",
        coordinate: "1-1",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tree/1-2.jpg",
        coordinate: "1-2",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tree/1-3.jpg",
        coordinate: "1-3",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tree/2-0.jpg",
        coordinate: "2-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tree/2-1.jpg",
        coordinate: "2-1",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tree/2-2.jpg",
        coordinate: "2-2",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tree/2-3.jpg",
        coordinate: "2-3",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tree/3-0.jpg",
        coordinate: "3-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tree/3-1.jpg",
        coordinate: "3-1",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tree/3-2.jpg",
        coordinate: "3-2",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tree/3-3.jpg",
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
*/

const gameAssetsSeed = [
  {
    gameName: "Tiger",
    assetList: [
      {
        position: "randomBoard",
        url: "../Tiger/0-0.jpg",
        coordinate: "0-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/0-1.jpg",
        coordinate: "0-1",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/0-2.jpg",
        coordinate: "0-2",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/0-3.jpg",
        coordinate: "0-3",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/1-0.jpg",
        coordinate: "1-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/1-1.jpg",
        coordinate: "1-1",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/1-2.jpg",
        coordinate: "1-2",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/1-3.jpg",
        coordinate: "1-3",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/2-0.jpg",
        coordinate: "2-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/2-1.jpg",
        coordinate: "2-1",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/2-2.jpg",
        coordinate: "2-2",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/2-3.jpg",
        coordinate: "2-3",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/3-0.jpg",
        coordinate: "3-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/3-1.jpg",
        coordinate: "3-1",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/3-2.jpg",
        coordinate: "3-2",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/3-3.jpg",
        coordinate: "3-3",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/4-0.jpg",
        coordinate: "4-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/4-1.jpg",
        coordinate: "4-1",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/4-2.jpg",
        coordinate: "4-2",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/4-3.jpg",
        coordinate: "4-3",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/5-0.jpg",
        coordinate: "5-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/5-1.jpg",
        coordinate: "5-1",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/5-2.jpg",
        coordinate: "5-2",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/5-3.jpg",
        coordinate: "5-3",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/6-0.jpg",
        coordinate: "6-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/6-1.jpg",
        coordinate: "6-1",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/6-2.jpg",
        coordinate: "6-2",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/6-3.jpg",
        coordinate: "6-3",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/7-0.jpg",
        coordinate: "7-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/7-1.jpg",
        coordinate: "7-1",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/7-2.jpg",
        coordinate: "7-2",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Tiger/7-3.jpg",
        coordinate: "7-3",
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
const gameAssetsSeed = [
  {
    gameName: "Wild",
    assetList: [
      {
        position: "randomBoard",
        url: "../Wild/0-0.jpg",
        coordinate: "0-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Wild/0-1.jpg",
        coordinate: "0-1",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Wild/0-2.jpg",
        coordinate: "0-2",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Wild/0-3.jpg",
        coordinate: "0-3",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Wild/1-0.jpg",
        coordinate: "1-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Wild/1-1.jpg",
        coordinate: "1-1",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Wild/1-2.jpg",
        coordinate: "1-2",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Wild/1-3.jpg",
        coordinate: "1-3",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Wild/2-0.jpg",
        coordinate: "2-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Wild/2-1.jpg",
        coordinate: "2-1",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Wild/2-2.jpg",
        coordinate: "2-2",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Wild/2-3.jpg",
        coordinate: "2-3",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Wild/3-0.jpg",
        coordinate: "3-0",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Wild/3-1.jpg",
        coordinate: "3-1",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Wild/3-2.jpg",
        coordinate: "3-2",
        isPlaced: 0,
      },
      {
        position: "randomBoard",
        url: "../Wild/3-3.jpg",
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
*/