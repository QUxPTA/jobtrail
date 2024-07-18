import mongoose from "mongoose";

const connection: { isConnected?: number; } = {};

const connectToDatabase = async () => {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.MONGODB_URI!);
  connection.isConnected = db.connections[0].readyState;
  console.log('Successfully connected to MongoDB');
};

export default connectToDatabase;
