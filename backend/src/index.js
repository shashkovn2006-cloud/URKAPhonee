const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Простые middleware
app.use(express.json());

// Простые роуты без БД
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.post('/api/auth/register', (req, res) => {
  res.json({ success: true, message: 'Registered (mock)' });
});

app.post('/api/auth/login', (req, res) => {
  res.json({ success: true, token: 'mock-token', user: { id: 1, name: 'Test User' } });
});

// Отдаем фронтенд
app.use(express.static(path.join(__dirname, '../../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/build/index.html'));
});

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`✅ Frontend served from: ${path.join(__dirname, '../../frontend/build')}`);
});
