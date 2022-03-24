const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ecommerce",
});

app.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    res.status(200).json(result);
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
