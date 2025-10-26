const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ games: [], message: 'Games endpoint - DB disabled' });
});

router.post('/create', (req, res) => {
  res.json({ 
    success: true, 
    gameId: Math.random().toString(36).substr(2, 9),
    message: 'Игра создана (mock)'
  });
});

module.exports = router;
