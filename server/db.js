const { Pool } = require("pg");
// const { config } = require("dotenv");
// config();
const {
  DB_HOST,
  DB_PORT,
  DB_PASSWORD,
  DB_USER,
  DB_DATABASE,
} = require("./config.js");

const pool = new Pool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_DATABASE,
});

// const connectionString =
//   "PGPASSWORD=TpYxL8a7sZN2SR3pyvjs psql -h containers-us-west-117.railway.app -U postgres -p 6829 -d railway";

// const pool = new Pool({
//   connectionString,
// });

module.exports = { pool };
