const Course = require('../models/Course');

class SiteController {
    // [GET] /news
    index(req, res, next) {
        Course.find({})
          .then(courses => {
            const courses = courses.map(course => course.toObject());
            res.render('home', {courses})
          })
          .catch(next);
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
