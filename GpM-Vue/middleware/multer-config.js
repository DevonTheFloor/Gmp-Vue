const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/gif': 'gif'
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'front/images/dl/');
  },
  filename: (req, file, cb) => {
    const name1 = file.originalname.split(' ').join('_');
    const name2 = name1.split('.')[0];
    const extension = MIME_TYPES[file.mimetype];
    cb(null, name2 + Date.now() + '.' + extension);
  }
});

module.exports = multer({storage: storage}).single('file');