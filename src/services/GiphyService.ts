import axios from 'axios';
import AppError from '../errors/AppError';
import { IGiphyResponse } from './interface/IGiphyResponse';

class GiphyService {
	public async execute(searchTerm: string): Promise<IGiphyResponse> {
		if (!process.env.GIPHY_KEY) {
			throw new AppError('Invalid Giphy Key.', 500);
		}

		try {
			const res = await axios.get(
				`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${process.env.GIPHY_KEY}&limit=1`,
				{
					responseType: 'json',
				}
			);

			return res.data;
		} catch (e) {
			throw new AppError('Giphy Server is unavailable.', 500);
		}
	}
}

export default GiphyService;
