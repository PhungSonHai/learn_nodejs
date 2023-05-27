class SiteController {
    home(req, res) {
        res.render('home')
    }

    searchHome(req, res) {
        res.send('Result search here')
    }
}

module.exports = new SiteController;