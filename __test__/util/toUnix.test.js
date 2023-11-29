const t = require('tap')
const toUnix = require('../../src/server/util/toUnix')

t.test('converts valid date to unix', async (t) => {
  t.plan(3)
  const date = new Date('2023-11-26')
  const unix = toUnix(date)

  t.ok(unix.unix, 'Returned a unix value')
  t.equal(unix.unix, date.getTime())
  t.match(new Date(unix.unix), date)
})
