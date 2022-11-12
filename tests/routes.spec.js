const request = require('supertest');
const rewire = require('rewire');
const { expect } = require('chai');
let app;

describe('Testing express app routes', () => {
    before(() => {
        app = rewire('../index.js');
    });

    describe('Testing /api/whoami route', () => {

        it('GET /api/whoami should return a JSON object with ipaddress, language and software keys', () => {
            request(app)
                .get('/api/whoami')
                .expect(200)
                .end((error, response) => {
                    if (error) {
                        reject(new Error('An error occured with the /api route, error: ' + error))
                    }
                    expect(response.body)
                        .to.have.property('ipaddress');
                    expect(response.body)
                        .to.have.property('language');
                    expect(response.body)
                        .to.have.property('software');
                });
        });              

    });

});