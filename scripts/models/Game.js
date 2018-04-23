const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now },
  assets:[{type: Schema.Types.ObjectId,ref:"GameAsset"}]
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;