module.exports = Date.prototype.toUTC = function () {
  const date = this
  return { utc: date.toUTCString() }
}
