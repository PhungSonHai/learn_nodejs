const express = require('express')
const router = express.Router()
const courseController = require('../app/controllers/CourseController')

router.get('/create', courseController.create)
router.post('/store', courseController.store)
router.get('/:id/edit', courseController.edit)
router.post('/:id', courseController.handleEdit)
router.get('/:slug', courseController.showDetailCourse)

module.exports = router;