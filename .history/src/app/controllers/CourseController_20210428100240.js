const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class CourseController {
  show(req, res) {
    res.send("COURSE DETAIL");
  }
}

module.exports = new CourseController();
