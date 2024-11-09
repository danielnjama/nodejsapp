const mysql = require('mysql2');
require('dotenv').config();

const getConnection = () => {
  return mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'myuser',
    password: process.env.DB_PASSWORD || 'mypassword',
    database: process.env.DB_DATABASE || 'mydatabase'
  });
};

module.exports = getConnection;
