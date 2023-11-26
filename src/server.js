const express = require('express')
const dotenv = require('dotenv')
const compression = require('compression')
const cors = require('cors')
const router = require('./routes')
const pkg = require('../package.json')
const routeNotFound = require('./middleware/routeNotFound')
const serverStartUpLog = require('./util/serverStartUpLog')

dotenv.config()

const app = express()
app.use(cors())
app.use(express.static('public'))
app.use(compression())
app.use('/v0/api/datestamp/', router)
app.get('/', async function (req, res) {
  res.json({ root: true })
})
app.use(routeNotFound)
const port = process.env.PORT || 3000
app.listen(port, () => serverStartUpLog(port, pkg))
