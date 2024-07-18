import { NextApiRequest, NextApiResponse } from 'next';
import Application from '@/models/Application';

export default async function fetchApplications(req: NextApiRequest, res: NextApiResponse) {
	const { userId } = req.query;

	try {
		let applications;
		if (userId) {
			applications = await Application.find({ userId }).exec();
		} else {
			applications = await Application.find().exec();
		}

		res.status(200).json(applications);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error fetching applications' });
	}
}
