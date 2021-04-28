const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    // [GET] /news
    index(req, res, next) {
        Course.find({})
          .then(courses => {
            courses = courses.map(course => course.toObject());
            res.render('home', {courses})
          })
          .catch(next);
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();