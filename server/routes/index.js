const express = require('express');
const router = express.Router();
const authorization = require('../controllers/authController');
const player = require('../controllers/userController');
const admin = require('../controllers/adminController');
const game = require('../controllers/gameController');

router.get('/', function (req, res) {
  res.status(200).json({
    message: 'root is rendered',
  });
});

// game
router.get();
router.post();
router.put();
router.delete();

// user
router.get();
router.post();
router.put();
router.delete();

//admin
router.get();
router.post();
router.put();
router.delete();

module.exports = router;
