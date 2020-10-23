import RecipePuppyService from '../../src/services/RecipePuppyService';

let recipePuppyService: RecipePuppyService;

describe('RecipePuppyTest', () => {
	beforeEach(() => {
		recipePuppyService = new RecipePuppyService();
	});

	it('it should GET recipe puppy api data', async () => {
		const recipePuppyData = await recipePuppyService.execute('eggs,rice');

		expect(Array.isArray(recipePuppyData)).toBe(true);

		expect(typeof recipePuppyData[0]).toBe('object');
		expect(recipePuppyData[0]).toHaveProperty('title');
		expect(recipePuppyData[0]).toHaveProperty('href');
		expect(recipePuppyData[0]).toHaveProperty('ingredients');
		expect(recipePuppyData[0]).toHaveProperty('thumbnail');
	});
});
