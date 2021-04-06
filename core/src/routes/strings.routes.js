const express = require('express')
const { Router } = express
const reverseString = require('../controllers/strings.controller')

/**
 * @const {object}
 */
const router = Router()

/**
 * GET function to redirect to a path and execute a controller
 * @param {string} string request info
 * @param {funtion} reverseString response info
 */
router.get('/iecho', reverseString)

module.exports = router
