const express = require('express');
const upload = require('../config/multerConfig');
const { protect } = require('../middlewares/authMiddleware');
const { createContest, getContests, getContestById, createPost } = require('../controllers/contestControllers');
const router = express.Router();

router.post('/create', protect, createContest);
router.get('/', protect, getContests);
router.get('/:contestId', protect, getContestById);
router.post('/:contestId/createpost', upload.fields([
    {name: 'image', maxSize: 1}
]), protect, createPost);

module.exports = router;