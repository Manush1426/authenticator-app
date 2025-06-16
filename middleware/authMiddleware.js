const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1]; // Extract token from "Bearer TOKEN"
  if (!token) return res.status(401).json({ msg: 'No token, auth denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    req.user = decoded.userId; // Attach user ID to request
    next(); // Proceed
  } catch (err) {
    res.status(401).json({ msg: 'Token is invalid' });
  }
};
