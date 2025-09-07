const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { createContest, getContests, getContestById } = require('../controllers/contestControllers');
const router = express.Router();

router.post('/create', protect, createContest);
router.get('/', protect, getContests);
router.get('/:contestId', protect, getContestById);

module.exports = router;