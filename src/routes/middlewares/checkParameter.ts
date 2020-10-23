import * as Yup from 'yup';

import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (req: Request, res: Response, next: NextFunction) => {
	const schema = Yup.object().shape({
		i: Yup.string().required(),
	});

	if (!(await schema.isValid(req.query))) {
		return res.status(400).json({ message: 'i is required' });
	}

	return next();
};
