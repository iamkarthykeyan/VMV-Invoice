const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet=require('helmet')
dotenv.config();
const connectDB = require('./config/db');
const historyRoutes = require('./routes/historyinfo'); // Adjust path if it differs

const app = express();
app.use(
    helmet.contentSecurityPolicy({
      crossOriginOpenerPolicy: { policy: 'cross-origin' },
      directives: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'",'http://localhost:5000/favicon.ico','https://media.istockphoto.com', 'https://ik.imagekit.io', 'https://static.vecteezy.com','https://static-00.iconduck.com'], // Allow images from ik.imagekit.io and vecteezy.com
        fontSrc: ["'self'", 'https://fonts.gstatic.com'], // Allow fonts from Google Fonts
        styleSrc: ["'self'", 'https://fonts.googleapis.com', 'https://cdn.jsdelivr.net', "'unsafe-inline'"], // Allow styles from Google Fonts and inline styles
        scriptSrc: ["'self'", 'https://cdn.tailwindcss.com','https://apis.google.com','https://www.googleapis.com', "'unsafe-inline'"], // Allow Tailwind CSS CDN and inline scripts
        mediaSrc: ["'self'", 'https://ik.imagekit.io'], // Allow media files from ik.imagekit.io
frameSrc: ["'self'",'https://content.googleapis.com/','https://accounts.google.com/'],      
      },
    })
);

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

console.log(__dirname);
// Mounting routes
app.use('/api/history', historyRoutes); // This line should be exactly as written
app.use(express.static(path.join(__dirname, '../vmv', 'dist')));

// Catch-all route for all other requests (React routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../vmv', 'dist', 'index.html'));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
