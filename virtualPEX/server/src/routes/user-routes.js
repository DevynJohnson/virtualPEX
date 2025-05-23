import express from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Sign Token method returns a signed token to the user after login
const signToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET || 'learntotalkwithme',
    { expiresIn: '1h' }
  );
};

// POST Login route - login existing user
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const correctPw = await user.isCorrectPassword(req.body.password);
    if (!correctPw) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    const token = signToken(user);
    res.json({ token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
});

// Post Signup route - creates a new user
router.post('/signup', async (req, res) => {
  try {
    const user = await User.create(req.body); // Make sure req.body contains { email, password, childName }
    const token = signToken(user);
    res.json({ token, user });
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      // Handle duplicate email error (MongoDB error code for unique constraint violation)
      return res.status(400).json({ message: 'Email already in use' });
    }
    res.status(400).json(error);
  }
});

export default router;
