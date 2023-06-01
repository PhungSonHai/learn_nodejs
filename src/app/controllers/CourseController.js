const Course = require('../models/Course')

class CourseController {
    showDetailCourse(req, res, next) {
        Course.findOne({ slug: req.params.slug }).exec()
            .then(course => {
                res.render('courses/course-detail', { course: course ? course.toObject() : course })
            })
            .catch(next)
    }
}

module.exports = new CourseController;