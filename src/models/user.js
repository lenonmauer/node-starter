import mongoose from 'mongoose';

const User = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    email: {
      type: String,
      lowercase: true,
      index: true,
    },

    password: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.model('User', User);
