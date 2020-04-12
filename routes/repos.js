const express = require("express");
const reposRouter = express.Router();
const axios = require("axios");

const githubSearchAPIRoute = (params = "") => {
  const path = "https://api.github.com/search/repositories?q=";
  return `${path}/${params}`;
};

reposRouter.get("/", (req, res, next) => {
  axios
    .get(githubSearchAPIRoute("react"))
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = reposRouter;
