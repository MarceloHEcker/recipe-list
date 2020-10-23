import { matchers } from 'jest-json-schema';
import app from '../../src/app';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const request = require('supertest');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const recipeSchema = require('../schema/recipe-valid-schema.json');

expect.extend(matchers);

describe('RecipeListService Test', () => {
	test('should GET rice recipes with rice', async done => {
		const response = await request(app).get('/recipes/?i=rice');

		expect(response.statusCode).toBe(200);
		expect(response.body.keywords).toEqual(['rice']);

		expect(response.body).toMatchSchema(recipeSchema);

		done();
	});

	test('should GET recipes with rice and chicken', async done => {
		const response = await request(app).get('/recipes/?i=rice,chicken');

		expect(response.statusCode).toBe(200);
		expect(response.body.keywords).toEqual(['chicken', 'rice']);

		expect(response.body).toMatchSchema(recipeSchema);

		done();
	});

	test('should GET recipes with tomato, chicken and rice', async done => {
		const response = await request(app).get('/recipes/?i=tomato,chicken,rice');

		expect(response.statusCode).toBe(200);
		expect(response.body.keywords).toEqual(['chicken', 'rice', 'tomato']);
		expect(response.body).toMatchSchema(recipeSchema);

		done();
	});

	test('should GET message error -  with 4 ingredients ', async done => {
		const response = await request(app).get(
			'/recipes/?i=tomato,chicken,rice,onion'
		);

		expect(response.statusCode).toBe(400);
		expect(typeof response.body.message).toEqual('string');
		expect(response.body.message).toEqual('Invalid number of ingredients.');

		done();
	});

	test('should GET message error -  with no params ', async done => {
		const response = await request(app).get('/recipes');

		expect(response.statusCode).toBe(400);
		expect(typeof response.body.message).toEqual('string');
		expect(response.body.message).toEqual('i is required');

		done();
	});

	test('should GET message error -  with i empty ', async done => {
		const response = await request(app).get('/recipes/?i=');

		expect(response.statusCode).toBe(400);
		expect(typeof response.body.message).toEqual('string');
		expect(response.body.message).toEqual('i is required');

		done();
	});

	test('should GET message error - without ingredient query param', async done => {
		const response = await request(app).get('/recipes/?teste=');

		expect(response.statusCode).toBe(400);
		expect(typeof response.body.message).toEqual('string');
		expect(response.body.message).toEqual('i is required');

		done();
	});

	test('should GET message error - without query params with no result', async done => {
		const response = await request(app).get('/recipes/?i=mondongodointerior');

		expect(response.statusCode).toBe(204);

		done();
	});
});
