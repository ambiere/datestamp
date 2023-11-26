module.exports = (error, req, res, next) => {
  if (error.message === 'Invalid date') {
    res.statusCode(400).json({ error: error.message, statusCode: 400 })
  }
  next(error)
}
