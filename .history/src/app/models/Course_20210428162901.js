const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, require },
    level: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", Course);
