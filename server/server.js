// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Optional: for .env support

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB URI
const MONGO_URI = 'mongodb://localhost:27017/qurbani'; // ✅ FIXED URL
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('🟢 MongoDB connected successfully');
})
.catch(err => {
  console.error('🔴 MongoDB connection error:', err.message);
});

// Simple route
app.get('/', (req, res) => {
  res.send('Welcome to the Qurbani Service Backend!');
});

// You can import and use your routes like this:
// const userRoutes = require('./routes/users');
// app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`🟢 Server running on port ${PORT}`);
});
