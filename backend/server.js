const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/db');
const historyRoutes = require('./routes/historyinfo'); // Adjust path if it differs

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Mounting routes
app.use('/api/history', historyRoutes); // This line should be exactly as written
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
