const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
  res.json({ 
    user: { id: 1, username: 'mock_user', email: 'mock@email.com' },
    message: 'User profile - DB disabled'
  });
});

module.exports = router;
