import { NextApiRequest, NextApiResponse } from 'next';
import Application from '@/models/Application';
import connectToDatabase from '@/lib/db';

connectToDatabase(); // Establish the database connection

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		try {
			const { userId, companyName, position, status, emailResponse, manualResponse, notes } = req.body;

			// Check if an application with the same userId and companyName already exists
			const existingApplication = await Application.findOne({ userId, companyName });

			if (!existingApplication) {
				// Create a new application if it doesn't exist
				const application = new Application({
					userId,
					companyName,
					position,
					status,
					emailResponse,
					manualResponse,
					notes,
				});
				await application.save();
				return res.status(201).json({ message: 'Application created successfully' });
			} else {
				// Return a 409 Conflict response if the application already exists
				return res.status(409).json({ message: 'Application already exists' });
			}
		} catch (error: any) {
			console.error(error);
			return res.status(500).json({ message: 'Error creating application' });
		}
	} else {
		return res.status(405).json({ message: 'Method not allowed' });
	}
};

export default handler;
