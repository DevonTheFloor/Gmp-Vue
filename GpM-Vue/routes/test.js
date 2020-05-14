const express = require('express');
const router = express.Router();
const CtrlTest = require('../controllers/test');
const multer = require('../middleware/multer-config');


router.post('/post',multer, CtrlTest.posttest);
router.get('/get',CtrlTest.gettest);

module.exports = router;