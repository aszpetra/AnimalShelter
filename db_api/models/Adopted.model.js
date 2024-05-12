import mongoose from 'mongoose';
import User from "./User.model.js";

const AdoptedSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specie: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  adopter: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: User
  }
});

export default mongoose.model('Adopted', AdoptedSchema);
