const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((courses) => {
        res.render("courses/show", { courses: mongooseToObject(courses) });
      })
      .catch((error) => {
        next(error);
      });
  }
}

module.exports = new CourseController();
