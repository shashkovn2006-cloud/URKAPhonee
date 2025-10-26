const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Регистрация временно отключена',
    user: { id: 1, username: req.body.username }
  });
});

router.post('/login', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Вход временно отключен',
    user: { id: 1, username: req.body.username },
    token: 'mock-token'
  });
});

module.exports = router;
