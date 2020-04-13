const express = require("express");
const reposRouter = express.Router();
const axios = require("axios");
const { extractSearchData, extractRepoName } = require("../utils/repoUtils");

const githubSearchAPIRoute = (params = "") => {
  const path = "https://api.github.com/search/repositories?q=";
  return `${path}/${params}`;
};

reposRouter.get("/", (req, res, next) => {
  axios
    .get(githubSearchAPIRoute("react"))
    .then((response) => {
      const info = response.data.items;
      const searchResult = extractSearchData(info);
      const autocompleteSearchInput = extractRepoName(searchResult);
      res.status(200).json({ autocompleteSearchInput, searchResult });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = reposRouter;
