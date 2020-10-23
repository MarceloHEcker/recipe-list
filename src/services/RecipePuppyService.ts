import axios from 'axios';
import AppError from '../errors/AppError';

class RecipePuppyService {
	public async execute(ingredients: string): Promise<any> {
		try {
			const response = await axios.get(
				`http://www.recipepuppy.com/api/?i=${ingredients}`,
				{
					responseType: 'json',
				}
			);
			return Object.values(response.data.results);
		} catch (e) {
			throw new AppError('Recipe Puppy Server is unavailable.', 500);
		}
	}
}

export default RecipePuppyService;
