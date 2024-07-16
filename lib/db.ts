import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!)
    console.log('Successfully connected to MongoDB')
  } catch (error: any) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
};

export default connectToDatabase
