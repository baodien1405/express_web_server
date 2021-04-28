const Course = require('../models/Course');

class SiteController {
    // [GET] /news
    index(req, res) {
        Course.find({}, function (err, courses) {
          if(!err) {
            res.json(courses);
          }
          res.status(400).json({error: 'message'});
        })
        res.render('home');
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
