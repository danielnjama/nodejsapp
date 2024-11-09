const express = require('express');
const app = express();
const port = 3000;
const getConnection = require('./db-config');

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Home route to test the database connection
app.get('/', (req, res) => {
  res.render('index');
});

// DB test!
app.get('/test-db', (req, res) => {
  const db = getConnection();
  db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err.stack);
      res.render('database', { status: 'Error connecting to the database: ' + err.stack });
      return;
    }
    db.query('SELECT 1 + 1 AS solution', (err, results) => {
      db.end(); // Close the connection after query
      if (err) {
        console.error('Error querying the database:', err.stack);
        res.render('database', { status: 'Error querying the database: ' + err.stack });
        return;
      }

      // Use 'results.rows' to access the rows returned by PostgreSQL
      if (results.rows && results.rows.length > 0) {
        res.render('database', { status: 'Database connection test successful! Result: ' + results.rows[0].solution });
      } else {
        res.render('database', { status: 'No rows returned from the query.' });
      }
    });
  });
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
