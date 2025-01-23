const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express(); // Creating Express Application
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const session = require('express-session'); // handles user sessions

const userSchema = new mongoose.Schema({ // Schema
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema); // Creates model nased on schema above, interacts with DB

mongoose // MongoDB connected using URI
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('db connected');

    app.use(
      cors({
        credentials: true,
        origin: 'http://127.0.0.1:3000' // Allows requests from front end link with credentials
      })
    );
    app.use( // Setting up session management with security
      session({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
          httpOnly: true,
          sameSite: 'strict',
        }
      })
     );
    app.post('/register', async (req, res) => { // Handling user registration
      const { username, email, password } = req.body;
      try { // Check if the user already exists
        const userExists = await User.findOne({ email }); 
        if (userExists) {
          return res.status(400).json({ message: 'User already exists.' });
        } // Create a new user
        const newUser = new User({ username, email, password });
        const savedUser = await newUser.save();
        req.session.userId = newUser.username; // Sets userID to the new users username
        res.status(201).json({ // Sends success response
          message: 'User registered successfully!',
          username: newUser.username,
        });
        console.log('Saved User:', savedUser);
      } catch (err) {
        console.error('Error registering user:', err.message);
        res.status(500).json({ message: 'Error registering user.', error: err.message });
      }
    });


    app.post('/login', async (req, res) => { // Handling user login
      const { email, password } = req.body;
      try { // Checks if user exists
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(404).json({ message: 'User not found.' });
        } // Password validation
        if (user.password !== password) { 
          return res.status(401).json({ message: 'Invalid credentials.' });
        }
        req.session.userId = user.username; // Sets userID to the users username
        res.status(200).json({ // Sends success response
          message: 'Login successful!',
          username: user.username,
        });
        console.log("userfound", user.email);
      } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: 'Internal server error.' });
      }
    });

    app.listen(5000, () => {
      console.log('Server running on http://127.0.0.1:5000'); // Starts server port
    });
  })
  .catch((err) => console.error('DB connection error:', err)); // Logs errors if the DB connection fails
