const mongoose = require('mongoose');

async function connect() {
  try {
    await connect('mongodb://localhost:27017/courses', {useNewUrlParser: true, useUnifiedTopology: true});
  } catch (error) {

  }
}

module.exports = {connect};