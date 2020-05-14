const express = require('express');
const router = express.Router();
const CtrlTest = require('../controllers/testor');


router.post('post', CtrlTest.gettest);
router.get('get',CtrlTest.posttest);

module.exports = router;