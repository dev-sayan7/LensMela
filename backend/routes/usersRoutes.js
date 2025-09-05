const express = require('express');
const router = express.Router();

const { pendingSignup, signup, setUsername, pendingLogin, login, getUser, applyAsOrganizer } = require('../controllers/usersControllers'); 
const { protect } = require('../middlewares/authMiddleware');

router.post('/pendingsignup', pendingSignup);
router.post('/signupverify', signup);
router.post('/setusername', setUsername);

router.post('/pendinglogin', pendingLogin);
router.post('/login', login);

router.get('/:username', getUser);

router.post('/applyAsOrganizer', protect, applyAsOrganizer);

module.exports = router;
