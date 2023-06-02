const Course = require('../models/Course')

class MeController {
    manage(req, res, next) {
        Course.find().lean().exec()
            .then(courses => res.render('me/manage-courses', { courses }))
            .catch(next)
    }
}

module.exports = new MeController;