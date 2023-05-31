const Course = require('../models/Course')

class SiteController {
    /*
    async home(req, res, next) {
        try 
        {
            const courses = await Course.find().lean().exec();
            return res.json({ courses: courses });
        } 
        catch (error) 
        {
            next(error);

            //res.status(500).json({error: error});
        }   
    }
    */

    home(req, res, next) {
        Course.find().lean().exec()
            .then(courses => res.render('home', { courses }))
            .catch(next) 
    }

    searchHome(req, res) {
        res.send('Result search here')
    }
}

module.exports = new SiteController;