module.exports = function toUTC (date) {
  return { utc: date.toUTCString() }
}
