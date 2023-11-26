'use strict'

const { Router, json } = require('express')
const pinoHttp = require('pino-http')
const loggerOptions = require('../config/loggerOptions')
const errorHandler = require('../middleware/errorHandler')
const toUnix = require('../util/toUnix')
const toUTC = require('../util/toUTC')
const router = Router()

router.use(json())
router.use(pinoHttp({ ...loggerOptions }))

toUTC()
toUnix()

router.get('/:date', async function (req, res, next) {
  const dateParam = req.params.date
  let date = {}
  isNaN(dateParam) ? (date = new Date(dateParam)) : (date = new Date(parseInt(dateParam)))
  try {
    if (date.toString() === 'Invalid date') {
      const error = new Error('Invalid date')
      throw error
    }
    res.json({ ...date.toUnix(), ...date.toUTC() })
  } catch (error) {
    next(error)
  }
})

router.use(errorHandler)

module.exports = router
