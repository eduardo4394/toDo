const { Pool } = require("pg");
// const { config } = require("dotenv");
// config();

// const pool = new Pool({
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: process.env.DB_DATABASE,
// });

const connectionString =
  "PGPASSWORD=TpYxL8a7sZN2SR3pyvjs psql -h containers-us-west-117.railway.app -U postgres -p 6829 -d railway";

const pool = new Pool({
  connectionString,
});

module.exports = pool;
