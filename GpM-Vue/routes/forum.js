const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config')
const forumCtrl = require('../controllers/forum');

router.post('/post',multer, forumCtrl.postOne);
router.get('/posts',forumCtrl.getAll);

module.exports = router;
