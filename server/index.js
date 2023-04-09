const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const taskRoutes = require("./routes/task.routes");
const { pool } = require("./db");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(taskRoutes);

app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});

app.get("/ping", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.send({
      message: result.rows[0].now,
    });
  } catch (error) {
    console.log(`${error.message} aca es`);
  }
});

const PORT = process.env.DB_PORT || 3005;
app.listen(PORT);
console.log(`Server running on ${PORT}`);
