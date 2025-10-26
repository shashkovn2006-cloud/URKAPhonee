const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'https://urkaphonee.onrender.com'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Middleware
app.use(express.json());

// Простые тестовые роуты без базы
app.use('/api/auth', (req, res) => {
  res.json({ message: 'Auth endpoint - DB disabled' });
});

app.use('/api/game', (req, res) => {
  res.json({ message: 'Game endpoint - DB disabled' });
});

app.use('/api/user', (req, res) => {
  res.json({ message: 'User endpoint - DB disabled' });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'URKA Phone API is running',
    timestamp: new Date().toISOString()
  });
});

// Статические файлы фронтенда
app.use(express.static(path.join(__dirname, '../../frontend/build')));

// Все запросы на фронтенд
app.get('(.*)', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/build/index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`✅ Frontend is serving static files`);
});
