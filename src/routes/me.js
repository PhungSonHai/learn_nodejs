const express = require('express')
const router = express.Router()
const meController = require('../app/controllers/MeController')

router.get('/manage/courses', meController.manage)
router.get('/trash/courses', meController.trash)

module.exports = router;