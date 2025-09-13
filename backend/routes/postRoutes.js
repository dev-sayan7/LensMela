const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { vote, fetchPostById } = require('../controllers/postControllers');
const router = express.Router();

router.post('/:postId/vote', protect, vote);

router.get('/:postId', protect, fetchPostById)

module.exports = router;