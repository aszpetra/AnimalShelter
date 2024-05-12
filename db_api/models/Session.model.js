import mongoose from "mongoose";
import User from "./User.model.js";

const SessionSchema = new mongoose.Schema({
    userId: { 
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: User 
    },
    sessionId: { 
      type: String, 
      required: true,
    },
});

export default mongoose.model('Session', SessionSchema);