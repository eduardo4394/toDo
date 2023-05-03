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

module.exports = { pool };
