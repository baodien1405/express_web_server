const Course = require('../models/Course');

class SiteController {
    // [GET] /news
    index(req, res, next) {
        Course.find({})
          .then(courses => res.render('home'))
          .catch(next);
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
