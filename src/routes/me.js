const express = require('express')
const router = express.Router()
const meController = require('../app/controllers/MeController')

router.get('/manage/courses', meController.manage)

module.exports = router;