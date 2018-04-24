const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameAssetSchema = new Schema({
  position: { type: String, required: true },
  url: { type: String, required:true },
  coordinate:{type:String,required:true},
  isPlaced:{type:Number,default:0},
});

const GameAsset = mongoose.model("GameAsset", gameAssetSchema);

module.exports = GameAsset;