import mongoose, { Document, Schema } from 'mongoose';

const statusEnum = [
  'applied',
  'email delivered',
  'email bounced',
  'email read',
  'email responded',
  'interview',
  'offer',
  'rejected',
];

const emailResponseEnum = ['autoresponse', 'manual'];
const manualResponseEnum = ['waitlist', 'affirmative', 'dismissive'];

interface IApplication extends Document {
  userId: mongoose.Types.ObjectId;
  companyName: string;
  position: string;
  status: string;
  emailResponse?: string;
  manualResponse?: string;
  appliedDate: Date;
  notes?: string;
}

const applicationSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  companyName: { type: String, required: true },
  position: { type: String, required: true },
  status: { type: String, enum: statusEnum, required: true },
  emailResponse: { type: String, enum: emailResponseEnum },
  manualResponse: { type: String, enum: manualResponseEnum },
  appliedDate: { type: Date, default: Date.now },
  notes: { type: String },
});

const Application = mongoose.models.Application || mongoose.model<IApplication>('Application', applicationSchema);

export default Application;
