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

t.test('Should return date timestamp for current date', async (t) => {
  t.plan(3)
  const date = new Date()
  const response = await request(app).get('/v0/api/datestamp/')
  t.equal(response.statusCode, 200)
  t.ok(response.body, 'Returned datestamp for current date')
  t.match(response.body, { unix: /\d+/, utc: date.toUTCString() })
})

t.test('Should return date timestamp', async (t) => {
  t.plan(3)
  const date = new Date('2023-11-27')
  const response = await request(app).get('/v0/api/datestamp/2023-11-27')
  t.equal(response.statusCode, 200)
  t.ok(response.body, 'Returned date timestamp')
  t.match(response.body, { unix: date.getTime(), utc: date.toUTCString() })
})

t.test('Should return html file', async (t) => {
  t.plan(3)
  const response = await request(app).get('/v0/api/datestamp')
  t.ok(response.text, 'Return text/html')
  t.equal(response.statusCode, 200)
  t.match(response.headers['content-type'], 'text/html')
})

t.test('Should return css file', async (t) => {
  t.plan(3)
  const response = await request(app).get('/v0/api/assets/style.css')
  t.ok(response.text, 'Return text/css')
  t.equal(response.statusCode, 200)
  t.match(response.headers['content-type'], 'text/css')
})

t.test('Should return js file', async (t) => {
  t.plan(3)
  const response = await request(app).get('/v0/api/assets/index.js')
  t.ok(response.text, 'Return text/js')
  t.equal(response.statusCode, 200)
  t.match(response.headers['content-type'], 'application/javascript')
})

t.test('Should return pkg version', async (t) => {
  t.plan(3)
  const response = await request(app).get('/v0/api/version')
  t.ok(response.body, 'Return pkg version')
  t.equal(response.statusCode, 200)
  t.match(response.body, { version: /[0-9]+/ })
})
