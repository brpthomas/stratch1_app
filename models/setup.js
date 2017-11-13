pgp = require('pg-promise')();

var db = pgp(process.env.DATABASE_URL || 'postgres://superbadpeter@localhost:5432/stractch1_app');

module.exports = db;