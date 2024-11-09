const { Client } = require('pg');
require('dotenv').config();

const getConnection = () => {
  return new Client({
    connectionString: process.env.DATABASE_URL,  // Use connectionString with the URL
    ssl: {
      rejectUnauthorized: false // Necessary for some cloud providers (e.g., Heroku)
    }
  });
};

module.exports = getConnection;





// POSTGRESQL DB CONFIG START

// const { Client } = require('pg');
// require('dotenv').config();

// const getConnection = () => {
//   return new Client({
//     host: process.env.DB_HOST || 'localhost',
//     user: process.env.DB_USER || 'myuser',
//     password: process.env.DB_PASSWORD || 'mypassword',
//     database: process.env.DB_DATABASE || 'mydatabase',
//     port: process.env.DB_PORT || 5432, // Default PostgreSQL port
//   });
// };

// module.exports = getConnection;

//POSTGRESQL DB CONFIG END








// MYSQL DB CONFIG START

// const mysql = require('mysql2');
// require('dotenv').config();

// const getConnection = () => {
//   return mysql.createConnection({
//     host: process.env.DB_HOST || 'localhost',
//     user: process.env.DB_USER || 'myuser',
//     password: process.env.DB_PASSWORD || 'mypassword',
//     database: process.env.DB_DATABASE || 'mydatabase'
//   });
// };

// module.exports = getConnection;

// MYSQL DB CONFIG END