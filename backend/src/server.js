const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
//enable cors
app.use(cors({
    origin: 'http://localhost:3000',
  }));
// Middleware for parsing JSON requests
app.use(express.json());

// Routes
const imagesRouter = require('./routes/photos');
app.use('/api/photos', imagesRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});