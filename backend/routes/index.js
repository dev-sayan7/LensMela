var express = require('express');
var router = express.Router();

const {feed} = require('../controllers/contestControllers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/test-cookie", (req, res) => {
    res.cookie("test", "123", { httpOnly: true, secure: false, sameSite: "Lax" });
    res.json({message: "Cookie should be set"});
});

module.exports = router;
