import { NextApiRequest, NextApiResponse } from 'next';
import Application from '@/models/Application';

export default async function deleteApplication(req: NextApiRequest, res: NextApiResponse) {
	const { id } = req.query;

	try {
		const deletedApplication = await Application.findByIdAndDelete(id);

		if (!deletedApplication) {
			return res.status(404).json({ message: 'Application not found' });
		}

		res.status(200).json({ message: 'Application deleted successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error deleting application' });
	}
}
