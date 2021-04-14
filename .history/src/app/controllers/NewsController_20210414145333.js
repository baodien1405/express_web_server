class NewsController {
  // [GET] /news
  index(req, res) {
    res.render("news");
  }

  // [GET] /news/:slug
  show() {
    res.send("NEW DETAIL!!!");
  }
}

module.exports = new NewsController();
