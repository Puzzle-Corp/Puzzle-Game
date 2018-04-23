const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String, required: true },
  parentCatId: { type: Schema.Types.ObjectId, required: false, default:null },
  catLevel: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  games: [{ type: Schema.Types.ObjectId, ref: "Game" }]
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;