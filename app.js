const express = require('express');
const app = express();
const port = 3000;
const getConnection = require('./db-config');

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Home route to test the database connection
app.get('/', (req, res) => {
  const db = getConnection();
  db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err.stack);
      res.render('index', { status: 'Error connecting to the database: ' + err.stack });
      return;
    }
    db.query('SELECT 1 + 1 AS solution', (err, results) => {
      db.end(); // Close the connection after query
      if (err) {
        console.error('Error querying the database:', err.stack);
        res.render('index', { status: 'Error querying the database: ' + err.stack });
        return;
      }
      res.render('index', { status: 'Database connection test successful! Result: ' + results[0].solution });
    });
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
