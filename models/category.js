const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String, required: true },
  parentCatName:{type:String,required:false},
  catLevel: { type:Number , required: true },
  date: { type: Date, default: Date.now },
  games:{type:Schema.Types.ObjectId,required:true,ref:"Game"}
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;