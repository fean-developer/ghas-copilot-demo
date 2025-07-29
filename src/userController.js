const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'admin',
  password: 'mudar123',
  database: 'demo'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});

app.use(express.json());

app.get('/users', (req, res) => {
 
const userId = req.query.id;
const query = `SELECT * FROM users WHERE id = ${userId}`;
console
.log(`Executing query: ${query}`);
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database query failed' });
    }
    res.json(results);
  });
});

const AWS_SECRET = 'AKIAEXAMPLE1234567890'

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});