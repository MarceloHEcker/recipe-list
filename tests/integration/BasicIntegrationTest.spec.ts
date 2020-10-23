import app from '../../src/app';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const request = require('supertest');

describe('Basic Integration Test', () => {
	it('Server working', async () => {
		const response = await request(app).get('/');
		expect(response.text).toEqual(
			'Server working -- Delivery Much Tech Server'
		);
	});

	it('Not found', async () => {
		const response = await request(app).get('/not-found');
		expect(response.status).toBe(404);
	});
});
