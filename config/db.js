const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'arrensong'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to Database');
});

module.exports = db;