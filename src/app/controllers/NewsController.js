class NewsController {
    index(req, res) {
        res.render('news')
    }

    showDetail(req, res) {
        res.send('News Detail')
    }
}

module.exports = new NewsController;