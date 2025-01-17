const mysql = require('mysql');

// Database configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Adjust based on your setup
  database: 'item_management'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  }
  console.log('Connected to the database.');
});

module.exports = db;
