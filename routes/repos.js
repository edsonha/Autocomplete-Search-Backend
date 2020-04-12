const express = require("express");
const reposRouter = express.Router();

reposRouter.get("/", (req, res, next) => {
  try {
    res.status(200).json("Welcome from Repos Router");
  } catch (error) {
    next(error);
  }
});

module.exports = reposRouter;
