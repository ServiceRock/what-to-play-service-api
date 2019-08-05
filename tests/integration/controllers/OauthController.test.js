// test/integration/controllers/OauthController.test.js
var supertest = require('supertest');
const sinon = require('sinon');

describe('OauthController.callback', () => {
	describe('#callback()', () => {
		it('should respond "Bad request"', (done) => {
			supertest(sails.hooks.http.app).post('/oauth/callback').send({ code: 'test' }).expect(400, done);
		});

		it('should respond "OK"', (done) => {
			// realize google oauth callback override to return success code.
			done();
		});
	});
});
