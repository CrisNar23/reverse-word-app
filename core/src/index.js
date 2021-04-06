const express = require('express')
const cors = require('cors')
const stringsRoutes = require('./routes/strings.routes')

/**
 * @const {object}
 */
const app = express()

/**
 * Function to apply cors policy
 * @param {function} cors CORS Module
 */
app.use(cors())

/**
 * Function to parse request to JSON
 * @param {function} express.json A function param to parse to JSON
 */
app.use(express.json())

/**
 * Function to use strings.routes.js
 * @param {string} string path
 * @param {function} stringsRoutes route file
 */
app.use('/', stringsRoutes)

/**
 * @const {number}
 */
const PORT = 3001

/**
 * Function to start express server
 * @param {number} PORT Application port
 * @param {function} arrowFunction Log when server is listening
 */
app.listen(PORT, () =>
  console.log(
    `Server listening on port: ${PORT} ->`,
    new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })
  )
)

module.exports = app
