const express = require('express');
const News = require('../models/News');

const router = express.Router();

// Get all news
router.get('/', async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

