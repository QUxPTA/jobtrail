import { NextApiRequest, NextApiResponse } from 'next';
import Application from '@/models/Application';

export default async function fetchApplication(req: NextApiRequest, res: NextApiResponse) {
	const { id } = req.query;

	try {
		const application = await Application.findById(id).exec();

		if (!application) {
			return res.status(404).json({ message: 'Application not found' });
		}

		res.status(200).json(application);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error fetching application' });
	}
}
