const t = require('tap')
const toUTC = require('../../src/server/util/toUTC')

t.test('converts valid date to utc', async (t) => {
  t.plan(3)
  const date = new Date('2023-11-26')
  const utc = toUTC(date)

  t.ok(utc.utc, 'Returned a utc value')
  t.equal(utc.utc, date.toUTCString())
  t.match(new Date(utc.utc), date)
})
