import 'dotenv/config';
import GiphyService from '../../src/services/GiphyService';

let giphyService: GiphyService;

describe('GiphyTest', () => {
	beforeEach(() => {
		giphyService = new GiphyService();
	});

	it('it should GET giphy api data', async () => {
		const giphyData = await giphyService.execute('eggs');

		expect(Array.isArray(giphyData.data)).toBe(true);

		expect(giphyData.meta.status).toBe(200);

		expect(Array.isArray(giphyData.data)).toBe(true);
		expect(typeof giphyData.data[0]).toBe('object');
		expect(giphyData.data[0]).toHaveProperty('url');
	});
});
