import { Router } from 'express';

import RecipesController from '../controllers/RecipesController';
import checkParameter from './middlewares/checkParameter';

const recipesRouter = Router();

const recipesController = new RecipesController();

recipesRouter.get('/', checkParameter, recipesController.list);

export default recipesRouter;
