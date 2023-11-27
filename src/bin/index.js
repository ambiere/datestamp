require('dotenv').config()
const app = require('../server/server')
const pkg = require('../../package.json')
const serverStartUpLog = require('../server/util/serverStartUpLog')

const port = process.env.PORT || 3000
app.listen(port, () => serverStartUpLog(port, pkg))
