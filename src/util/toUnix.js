module.exports = Date.prototype.toUnix = function () {
  const date = this
  return { unix: date.getTime() }
}
