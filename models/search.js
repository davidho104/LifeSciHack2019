const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const searchSchema = new Schema({
  post: String,
  date: { type: Date, default: Date.now },
  geolocation: { type: String},

});

const Posts = mongoose.model("Search", searchSchema);

module.exports = Posts;
