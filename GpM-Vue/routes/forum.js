const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config')
const forumCtrl = require('../controllers/forum');
const auth = require('../middleware/auth');

router.post('/post',multer, forumCtrl.postOne);
router.post('/reponse',multer, forumCtrl.resForum);
router.post('/reponse/all', forumCtrl.getAllRes);
router.get('/post/:id',forumCtrl.getOne);
router.get('/posts',auth,forumCtrl.getAll);

module.exports = router;
