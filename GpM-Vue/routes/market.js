const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');
const marketCtrl = require('../controllers/market');

router.post('/post',multer, marketCtrl.postOne);
router.get('/all',auth, marketCtrl.getAll);

module.exports = router;