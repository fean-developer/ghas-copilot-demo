const express = require('express');
const app = express();
const mysql = require('mysql');

const mysql_connection_string = 'mudar123';

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'admin',
  password: mysql_connection_string,
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

const AWS_ACCESS_KEY = "AKIAIOSFODNN7EXAMPLE";
const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";
const GH_PAT = 'ghp_abcd1234exampleTokenForDemo';

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});