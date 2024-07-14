import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '@/lib/db';
import User from '@/models/User';
import { verifyPassword, signToken } from '@/lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isValidPassword = await verifyPassword(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = signToken(user._id);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
