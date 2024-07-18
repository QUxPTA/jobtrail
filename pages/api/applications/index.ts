import { NextApiRequest, NextApiResponse } from 'next';
import createApplication from './create';
import fetchApplication from './fetchOne';
import fetchApplications from './fetch';
import updateApplication from './update';
import deleteApplication from './delete';
export default async function applicationsAPI(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case 'POST':
			return createApplication(req, res);
		case 'GET':
			if (req.query.id) {
				return fetchApplication(req, res);
			} else {
				return fetchApplications(req, res);
			}
		case 'PATCH':
			return updateApplication(req, res);
		case 'DELETE':
			return deleteApplication(req, res);
		default:
			res.status(405).json({ message: 'Method not allowed' });
	}
}
