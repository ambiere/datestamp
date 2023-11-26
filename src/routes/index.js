"use strict"

const { Router, json } = require("express")
const pino_http = require("pino-http")
const loggerOptions = require("../config/loggerOptions")
const errorHandler = require("../middleware/errorHandler")
const router = Router()

router.use(json())
router.use(pino_http({ ...loggerOptions }))

router.get("/:date", async function (req, res, next) {
  res.json({ date: req.params.date })
})

router.use(errorHandler)

module.exports = router
