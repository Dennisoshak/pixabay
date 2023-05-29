const express = require('express');
const axios = require('axios');
const router = express.Router();

// GET /api/images
// Query Parameters: sort (id | date), page, perPage
router.get('/', async (req, res) => {
  try {
    const { sort, page, perPage } = req.query;

    // Call Pixabay API with the provided parameters
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: 'YOUR_PIXABAY_API_KEY',
        order: sort === 'date' ? 'latest' : 'popular',
        page: page || 1,
        per_page: perPage || 10,
      },
    });

    const photos = response.data.hits;
    res.json(photos);
  } catch (error) {
    console.error('Error fetching photos:', error);
    res.status(500).json({ error: 'Failed to fetch' });
  }
});

module.exports = router;