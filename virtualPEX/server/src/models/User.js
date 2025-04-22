import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
    trim: true, // Ensures spaces are trimmed from the email
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  childName: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the creation date
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Automatically set the update date
  },
});

// Hash the password before saving the user
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    try {
      // Use bcrypt to hash the password
      this.password = await bcrypt.hash(this.password, 10);
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

// Method to compare passwords during login
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password); // Compare the provided password with the stored hash
};

// Automatically update 'updatedAt' field whenever the document is modified
userSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updatedAt: new Date() }); // Set the current date for updatedAt
  next();
});

const User = model('User', userSchema);

export default User;
