const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
  show(req, res) {
    res.send("COURSE DETAIL");
  }
}

module.exports = new SiteController();
