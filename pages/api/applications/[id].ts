import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import connectToDatabase from '@/lib/db';
import Application from '@/models/Application';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  const { id } = req.query;

  // Validate the id
  if (!mongoose.Types.ObjectId.isValid(id as string)) {
    return res.status(400).json({ message: 'Invalid application ID' });
  }

  switch (req.method) {
    case 'GET':
      try {
        const application = await Application.findById(id);
        if (!application) {
          return res.status(404).json({ message: 'Application not found' });
        }
        res.status(200).json(application);
      } catch (error) {
        console.error('GET application by ID error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
      break;
    case 'PUT':
      try {
        const updatedApplication = await Application.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedApplication) {
          return res.status(404).json({ message: 'Application not found' });
        }
        res.status(200).json(updatedApplication);
      } catch (error) {
        console.error('PUT application by ID error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
      break;
    case 'DELETE':
      try {
        await Application.findByIdAndDelete(id);
        res.status(204).end();
      } catch (error) {
        console.error('DELETE application by ID error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
