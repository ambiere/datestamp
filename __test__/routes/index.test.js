const t = require('tap')
const request = require('supertest')
const app = require('../../src/server/server')

t.test('Should return not found when access unknown endpoint', async (t) => {
  t.plan(3)
  const response = await request(app).get('/v0/api/')
  t.ok(response.body, 'Return not found info')
  t.equal(response.statusCode, 404)
  t.match(response.body, {
    message: 'Route GET:/v0/api/ not found',
    error: 'Not Found',
    statusCode: 404
  })
})

t.test('Should return error when provided invalid date', async (t) => {
  t.plan(3)
  const response = await request(app).get('/v0/api/datestamp/haha')
  t.ok(response.body, 'Return Invalid date info')
  t.equal(response.statusCode, 400)
  t.match(response.body, {
    error: 'Invalid Date',
    statusCode: 400
  })
})

t.test('should return date timestamp', async (t) => {
  t.plan(3)
  const date = new Date('2023-11-27')
  const response = await request(app).get('/v0/api/datestamp/2023-11-27')
  t.equal(response.statusCode, 200)
  t.ok(response.body, 'Returned date timestamp')
  t.match(response.body, { unix: date.getTime(), utc: date.toUTCString() })
})
