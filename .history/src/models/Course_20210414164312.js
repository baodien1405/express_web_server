const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
  name: {type: String},
  description: {type: String},
  image: {type: String},
});