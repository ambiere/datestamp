'use strict'

const { Router, json } = require('express')
const pinoHttp = require('pino-http')
const path = require('path')
const loggerOptions = require('../config/loggerOptions')
const toUnix = require('../util/toUnix')
const toUTC = require('../util/toUTC')
const router = Router({ strict: true })

router.use(json())
router.use(pinoHttp({ ...loggerOptions }))

router.get('/datestamp', async (req, res) => {
  res.sendFile(path.join(__dirname, '../../../', 'public/'))
})

router.get('/datestamp/', async function (req, res, next) {
  try {
    const date = new Date()
    res.json({ ...toUnix(date), ...toUTC(date) })
  } catch (error) {
    next(error)
  }
})

router.get('/datestamp/:date', async function (req, res, next) {
  const dateParam = req.params.date
  let date = {}
  isNaN(dateParam) ? (date = new Date(dateParam)) : (date = new Date(parseInt(dateParam)))
  try {
    if (date.toString() === 'Invalid Date') {
      const error = new Error('Invalid Date')
      throw error
    }
    res.json({ ...toUnix(date), ...toUTC(date) })
  } catch (error) {
    next(error)
  }
})

module.exports = router
