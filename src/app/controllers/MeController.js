const Course = require('../models/Course')

class MeController {

    manage(req, res, next) {
        Promise.all([Course.find().lean().exec(), Course.countDeleted()])
            .then(([courses, countDeleted]) => res.render('me/manage-courses', {
                courses,
                countDeleted
            }))
            .catch(next)
    }

    trash(req, res, next) {
        Course.findDeleted().lean().exec()
            .then(courses => res.render('me/trash-courses', { courses }))
            .catch(next)
    }
}

module.exports = new MeController;