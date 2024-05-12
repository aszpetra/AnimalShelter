import mongoose from 'mongoose';
import User from './User.model.js';

const CharitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: User
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }

});

export default mongoose.model('Charity', CharitySchema);
