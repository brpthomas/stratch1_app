const pgp = require('pg-promise')();

// this is another way of doing it
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'my_tasks'
});

module.exports = db;
