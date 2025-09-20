const express = require('express');
const { protect, userCheck } = require('../middlewares/authMiddleware');
const { vote, fetchPostById } = require('../controllers/postControllers');
const { voteValidate } = require('../middlewares/postMiddleware');
const router = express.Router();

router.post('/:postId/vote', protect, userCheck, voteValidate, vote);

router.get('/:postId', protect, fetchPostById);

module.exports = router;