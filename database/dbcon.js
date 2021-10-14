const mysql = require('mysql');
require('dotenv').config();

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB,
  dateStrings: true
});

function promisePool(query, vars) {
  console.log("In dbCon, query = ", query)
  return new Promise((res, rej) => {
    pool.query(query, vars, (err, rows, fields) => {
      if (err) {
        console.error(err);
        rej(err);
      } else {
        res(rows);
      }
    })
  });
}

module.exports = promisePool