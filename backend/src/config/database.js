// Database configuration disabled for deployment
console.log('✅ Database configuration disabled');

const mockQuery = (text, params) => {
  return Promise.resolve({ rows: [], rowCount: 0 });
};

module.exports = {
  query: mockQuery,
  pool: { end: () => Promise.resolve() }
};
