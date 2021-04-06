const express = require('express')
const cors = require('cors')
const stringsRoutes = require('./routes/strings.routes')

const app = express()

app.use(cors())

app.use(express.json())

app.use('/', stringsRoutes)

const PORT = 3001

app.listen(PORT, () =>
  console.log(
    `Server listening on port: ${PORT} ->`,
    new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })
  )
)

module.exports = app
