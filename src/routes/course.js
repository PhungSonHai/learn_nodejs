const express = require('express')
const router = express.Router()
const courseController = require('../app/controllers/CourseController')

router.get('/create', courseController.create)
router.post('/store', courseController.store)
router.get('/:id/edit', courseController.edit)
router.patch('/:id/restore', courseController.restore)
router.put('/:id', courseController.handleEdit)
router.delete('/:id/forceDelete', courseController.forceDelete)
router.delete('/:id', courseController.handleDelete)
router.get('/:slug', courseController.showDetailCourse)

module.exports = router;