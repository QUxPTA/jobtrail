import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '@/lib/db';
import User from '@/models/User';
import { hashPassword, signToken } from '@/lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: 'Email already in use' });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = signToken(newUser._id);

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
