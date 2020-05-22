const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    //Dial0go_s0pra_i_dÛe_m@ssimi_6temi_d-L_mondo
    const email = decodedToken.email;
    if (req.body.email && req.body.email !== email) {
      throw 'Unknow user\'s email';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      message: "Thanks to signup befor login"
     // error: new Error("No token in header")
    });
  }
};