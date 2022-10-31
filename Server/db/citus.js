/**
* file: db/citus.js
*/

const { Pool } = require('pg');

const pool = new Pool({
  max: 300,
  connectionTimeoutMillis: 5000,

  host: 'c.<database>.postgres.database.azure.com',
  port: 5432,
  user: 'citus',
  password: '<password>',
  database: 'citus',
  ssl: true,
});

module.exports = {
    pool
};