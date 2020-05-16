const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uploadSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Upload = mongoose.model("Upload", uploadSchema);

module.exports = Upload;