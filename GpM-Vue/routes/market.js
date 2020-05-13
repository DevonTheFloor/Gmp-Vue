const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config');
const marketCtrl = require('../controllers/market');

router.post('/post',multer, marketCtrl.postOne);
router.get('/all', marketCtrl.getAll);

module.exports = router;