const express = require("express");
const axios = require("axios");
const router = express.Router();

// GET /api/images

router.get("/", async (req, res) => {
  try {
    // Query Parameters from client side
    const { sort, page, perPage, q } = req.query;

    //Sorting functuanality
    let sortOrder;
    if (sort === "date") {
      sortOrder = "latest";
    } else if (sort === "id") {
      sortOrder = "popular";
    } else {
      sortOrder = "popular"; // Default sort order
    }

    // Call Pixabay API with the provided parameters
    const response = await axios.get(
      "https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736",
      {
        params: {
          category: q || "art",
          order: sortOrder,
          page: page || 1,
          per_page: perPage || 9,
        },
      }
    );

    const photos = response.data.hits;
    res.json(photos);
  } catch (error) {
    console.error("Error fetching photos:", error);
    res.status(500).json({ error: "Failed to fetch" });
  }
});

module.exports = router;
