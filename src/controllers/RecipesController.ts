import { Request, Response } from 'express';
import RecipesListService from '../services/RecipesListService';

export default class RecipesController {
	public async list(request: Request, response: Response): Promise<Response> {
		let { i } = request.query;

		// HACK tipagem
		if (!i) i = '';

		const recipesListService = new RecipesListService();

		const transaction = await recipesListService.execute(i.toString());

		if (!transaction) {
			return response.status(204).send();
		}

		return response.json(transaction).status(200);
	}
}
