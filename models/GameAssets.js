const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameAssetsSchema = new Schema({
  position: { type: String, required: true },
  url: { type: String, required:true },
  coordinate:{type:String,required:true},
  isPlaced:{type:Boolean},
  gameId:{type:Schema.Types.ObjectId,required:true,ref:"Game"}
});

const GameAssets = mongoose.model("GameAssets", gameAssetsSchema);

module.exports = GameAssets;