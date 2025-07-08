// server/routes/protectedRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

router.get('/dashboard', authMiddleware, (req, res) => {
  res.json({ message: `Welcome ${req.user.email}` });
});

module.exports = router; // ✅ THIS IS CRUCIAL
