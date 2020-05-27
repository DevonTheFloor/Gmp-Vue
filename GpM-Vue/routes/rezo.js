const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const rezoCtrl = require('../controllers/rezo');

router.post('/post',rezoCtrl.postOne);
router.get('/posts',auth, rezoCtrl.getAll);

module.exports = router;