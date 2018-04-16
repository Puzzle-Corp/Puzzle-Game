const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String, required: true },
  parentCatName:{type:String,required:false},
  catLevel: { type:Number , required: true },
  date: { type: Date, default: Date.now },
 // parentCatId:{type:Schema.Types.ObjectId,required:null,ref:"Category"}
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;