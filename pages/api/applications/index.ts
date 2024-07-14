import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '@/lib/db';
import Application from '@/models/Application';
import { authenticate } from '@/lib/middleware';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  if (req.method === 'GET') {
    try {
      const applications = await Application.find({});
      res.status(200).json(applications);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    try {
      const newApplication = new Application(req.body);
      await newApplication.save();
      res.status(201).json(newApplication);
    } catch (error) {
      res.status(400).json({ message: 'Bad Request' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default authenticate(handler);
