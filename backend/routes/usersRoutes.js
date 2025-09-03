const express = require('express');
const router = express.Router();

const { pendingSignup, signup, setUsername } = require('../controllers/usersControllers'); 

router.post('/pendingsignup', pendingSignup);
router.post('/signupverify', signup);
router.post('/setusername', setUsername);

module.exports = router;
