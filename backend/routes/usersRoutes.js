const express = require('express');
const router = express.Router();
const userModel = require('../models/users/userModel');

const { pendingSignup, signup, setUsername, pendingLogin, login, getUser, applyAsOrganizer, logout } = require('../controllers/usersControllers'); 
const { protect } = require('../middlewares/authMiddleware');

router.post('/pendingsignup', pendingSignup);
router.post('/signupverify', signup);
router.post('/setusername', setUsername);

router.post('/pendinglogin', pendingLogin);
router.post('/login', login);

router.get('/logout', protect, logout);

router.get('/:username', getUser);

router.post('/applyAsOrganizer', protect, applyAsOrganizer);

router.get('/auth/check', protect, async function (req, res){
    const userId = req.user;
    const user = await userModel.findById(userId);
    return res.status(200).json({user: {id: user._id, name: user.name, username: user.username, role: user.role}, redirectTo: '/feed'})
});



module.exports = router;
