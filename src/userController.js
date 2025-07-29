const express = require('express');
const app = express();
const mysql = require('mysql');

const MYSQL_PASSWORD = 'mudar123';

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'admin',
  password: MYSQL_PASSWORD,
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



// Vazamentos de secrets para teste do GHAS
// Exemplo de AWS Access Key ID e Secret Access Key
const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE";
const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

// Exemplo de GitHub Webhook Secret
const GITHUB_WEBHOOK_SECRET = "whsec_1234567890abcdef1234567890abcdef";

// Exemplo de GitHub Personal Access Token (PAT)
const GH_PAT = "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";

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});