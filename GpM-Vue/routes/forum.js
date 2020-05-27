const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config')
const forumCtrl = require('../controllers/forum');
const auth = require('../middleware/auth');

router.post('/post',auth ,multer, forumCtrl.postOne);
router.post('/reponse',auth, multer, forumCtrl.resForum);
router.post('/reponse/all',auth, forumCtrl.getAllRes);
router.get('/post/:id',auth, forumCtrl.getOne);
router.get('/posts',auth,forumCtrl.getAll);

module.exports = router;
