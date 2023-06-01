const Course = require('../models/Course')

class CourseController {
    showDetailCourse(req, res, next) {
        Course.findOne({ slug: req.params.slug }).exec()
            .then(course => {
                res.render('courses/course-detail', { course: course ? course.toObject() : course })
            })
            .catch(next)
    }

    create(req, res, next) {
        try 
        {
            res.render('courses/course-create')
        } 
        catch (error) 
        {
            next(error)
        }
    }

    async store(req, res, next) {
        await Course.create(req.body)
            .then(() => res.redirect('/'))
            .catch(next)
    }
}

module.exports = new CourseController;