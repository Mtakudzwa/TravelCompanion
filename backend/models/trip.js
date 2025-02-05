// backend/models/Trip.js
import mongoose from 'mongoose';

const TripSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  destination: { type: String, required: true },
  activities: [String],
  budget: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model('Trip', TripSchema);
