const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((courses) => {
        res.json(courses);
      })
      .catch((error) => {
        next(error);
      });
  }
}

module.exports = new CourseController();
