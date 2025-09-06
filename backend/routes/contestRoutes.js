const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { createContest } = require('../controllers/contestControllers');
const router = express.Router();

router.post('/create', protect, createContest);

module.exports = router;