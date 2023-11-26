const express = require("express")
const dotenv = require("dotenv")
const compression = require("compression")
const cors = require("cors")
const router = require("./routes")
const routeNotFound = require("./middleware/routeNotFound")

dotenv.config()

const app = express()
app.use(cors())
app.use(express.static("public"))
app.use(compression())
app.use("/v1/datestamp/", router)
app.get("/", async function (req, res) {
  res.json({ root: true })
})

app.use(routeNotFound)

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}`)
})
