'use strict';

// const { it, expect } = require('@jest/globals');
const supertest = require('supertest');
// const { describe } = require('yargs');
const server = require('../src/server.js');
const request = supertest(server.app);

describe('General server tests', () => {
  it('404 bad route', async () => {
    await request.get('/doesNotExist')
      .then(data => {
        expect(data.status).toEqual(404);
      })
  })

  it('404 on a bad method', async () => {
    await request.post('/person')
      .then(data => {
        expect(data.status).toEqual(404);
      })
  })

  it('500 if no name in the query string', async () => {
    await request.get('/person')
      .then(data => {
        expect(data.status).toEqual(500);
      })
  })

  it('200 if the name is in the query string', async () => {
    await request.get('/person?name=arthur')
      .then(data => {
        expect(data.status).toEqual(200);
      })
  })

  it('Given an name in the query string, the output object is correct', async () => {
    await request.get('/person?name=arthur')
      .then(data => {
        expect(data.body.name).toEqual('arthur');
      })

  })

})



