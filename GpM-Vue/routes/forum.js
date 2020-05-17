const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config')
const forumCtrl = require('../controllers/forum');

router.post('/post',multer, forumCtrl.postOne);
router.get('/post/:id',forumCtrl.getOne);
router.get('/posts',forumCtrl.getAll);

module.exports = router;
