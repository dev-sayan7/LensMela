const express = require('express');
const router = express.Router();

const { pendingSignup, signup, setUsername, pendingLogin, login, getUser } = require('../controllers/usersControllers'); 

router.post('/pendingsignup', pendingSignup);
router.post('/signupverify', signup);
router.post('/setusername', setUsername);

router.post('/pendinglogin', pendingLogin);
router.post('/login', login);

router.get('/:username', getUser);

module.exports = router;
