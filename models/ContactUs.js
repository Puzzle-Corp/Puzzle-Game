const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: { type: String, required: true },
  email:{type:String, required:true},
  date: { type: Date, default: Date.now },
  message:{ type: String, required: false },
});

const ContactUs = mongoose.model("ContactUs", contactSchema);

module.exports = ContactUs;