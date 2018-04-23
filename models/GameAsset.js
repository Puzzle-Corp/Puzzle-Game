const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// position and coordinate must be removed in new version
const gameAssetSchema = new Schema({
  position: { type: String, required: true },
  url: { type: String, required:true },
  coordinate:{type:String,required:true},
  isPlaced:{type:Number,default:0},
 // gameName:{type:String,required:false},
});

const GameAsset = mongoose.model("GameAsset", gameAssetSchema);

module.exports = GameAsset;