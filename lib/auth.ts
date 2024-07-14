import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const verifyPassword = async (password: string, hashedPassword: string) => {
  return bcrypt.compare(password, hashedPassword);
};

export const signToken = (userId: string) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
