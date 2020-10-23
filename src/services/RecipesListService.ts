import AppError from '../errors/AppError';
import order from '../utils/RecipeAlphabeticalOrder';
import GiphyService from './GiphyService';
import RecipePuppyService from './RecipePuppyService';

interface IRecipe {
	title: string;
	ingredients: Array<string>;
	link: string;
	gif: string;
	href?: string;
}

interface IResponse {
	keywords: string | Array<string>;
	recipes: Array<IRecipe> | [];
}

class RecipesListService {
	public async execute(
		ingredientsParam: string
	): Promise<IResponse | undefined> {
		const recipePuppyService = new RecipePuppyService();
		const giphyService = new GiphyService();

		const ingredientsList = ingredientsParam.split(',');

		if (ingredientsList.length > 3) {
			throw new AppError('Invalid number of ingredients.', 400);
		}

		const recipesResponse: IResponse = {
			keywords: ingredientsList.sort(),
			recipes: [],
		};

		const recipesListPuppy = await recipePuppyService.execute(ingredientsParam);

		// lista de receitas vazias
		if (!recipesListPuppy || !recipesListPuppy.length) {
			return undefined;
		}

		const auxRecipeResponse: Array<IRecipe> = [];

		const mapperRecipes = async ({ title, ingredients, href }: any) => {
			const giphy = await giphyService.execute(title);

			auxRecipeResponse.push({
				title,
				link: href,
				ingredients: ingredients.split(', ').sort(),
				gif: giphy.data.length ? giphy.data[0].url : '',
			});
		};

		await Promise.all(recipesListPuppy.map(mapperRecipes));

		recipesResponse.recipes = order(auxRecipeResponse);

		return recipesResponse;
	}
}

export default RecipesListService;
