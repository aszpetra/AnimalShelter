import mongoose from 'mongoose';

const AnimalSchema = new mongoose.Schema({
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
  description: {
    type: String,
    required: true
  }
});

export default mongoose.model('Animal', AnimalSchema);
