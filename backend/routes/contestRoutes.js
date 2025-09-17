const express = require('express');
const upload = require('../config/multerConfig');
const { protect, organizerCheck } = require('../middlewares/authMiddleware');
const { createContest, getContests, getContestById, createPost, leaderboard, myContest } = require('../controllers/contestControllers');
const { timeline } = require('../middlewares/postMiddleware');
const router = express.Router();

router.post('/create', protect, createContest);
router.get('/', protect, getContests);
router.get('/:contestId', protect, getContestById);
router.post('/:contestId/createpost', timeline, upload.fields([
    {name: 'image', maxSize: 1}
]), protect, createPost);

router.get('/:contestId/leaderboard', protect, leaderboard);

router.get('/user/:username', protect, myContest);

module.exports = router;