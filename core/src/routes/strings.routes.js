const express = require('express')
const { Router } = express
const reverseString = require('../controllers/strings.controller')

const router = Router()

router.get('/iecho', reverseString)

module.exports = router
