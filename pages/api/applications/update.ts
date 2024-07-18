import { NextApiRequest, NextApiResponse } from 'next';
import Application from '@/models/Application';

export default async function updateApplication(req: NextApiRequest, res: NextApiResponse) {
	const { id } = req.query;
	const { userId, companyName, position, status, emailResponse, manualResponse, appliedDate, notes } = req.body;

	try {
		const application = await Application.findById(id).exec();

		if (!application) {
			return res.status(404).json({ message: 'Application not found' });
		}

		application.userId = userId;
		application.companyName = companyName;
		application.position = position;
		application.status = status;
		application.emailResponse = emailResponse;
		application.manualResponse = manualResponse;
		application.appliedDate = appliedDate;
		application.notes = notes;

		await application.save();

		res.status(200).json({ message: 'Application updated successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error updating application' });
	}
}
