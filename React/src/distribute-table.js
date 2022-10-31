/**
* file: distribute-table.js
*/

const { pool } = require('./db/citus');

async function queryDatabase() {
  const queryString = `
    SELECT create_distributed_table('pharmacy', 'pharmacy_id');
  `;

  try {
    await pool.query(queryString);
    console.log('Distributed pharmacy table.');
  } catch (err) {
    console.log(err.stack);
  } finally {
    pool.end();
  }
}

queryDatabase();