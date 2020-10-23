import { Router } from 'express';
import recipesRouter from './recipes.routes';

const routes = Router();

routes.get('/', (req, res) => {
	res.send('Server working -- Delivery Much Tech Server');
});

routes.use('/recipes', recipesRouter);

export default routes;
