const superTest = require('supertest')
const chai = require('chai')
const expect = chai.expect
const app = require('../src/index')

/* eslint-env node, mocha */
describe('Reverse String API', () => {
  it('Verify respone status 200 and reverse string', async () => {
    const response = await superTest(app).get('/iecho')
      .set('Content-Type', 'application/json')
      .query({ text: 'test' })
    expect(response.status).to.equal(200)
    expect(response.body.reverseText).to.be.a('string').that.equals('tset')
    expect('Content-Type', /json/)
  })

  it('Verify respone status 400 and error response', async () => {
    const response = await superTest(app).get('/iecho')
      .set('Content-Type', 'application/json')
      .query({ text: '' })
    expect(response.status).to.equal(400)
    expect(response.body.error).to.be.a('string').that.equals('No text')
    expect('Content-Type', /json/)
  })

  it('Verify if reverse string is palindrome', async () => {
    const response = await superTest(app).get('/iecho')
      .set('Content-Type', 'application/json')
      .query({ text: 'la ruta nos aporto otro paso natural' })
    expect(response.body.reverseText).to.be.a('string').that.equals('larutan osap orto otropa son atur al')
    expect(response.body.palindrome).to.equal(true)
    expect('Content-Type', /json/)
  })
})
