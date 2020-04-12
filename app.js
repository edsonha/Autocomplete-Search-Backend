const express = require("express");
const app = express();
const cors = require("cors");
const reposRouter = require("./routes/repos");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json("Welcome to Express REST API");
});

app.use("/repos", reposRouter);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
