const extractSearchData = (info) => {
  const searchResult = [];
  for (let i = 0; i < info.length; i++) {
    searchResult.push({
      full_name: info[i].full_name,
      description: info[i].description,
      stars: info[i].stargazers_count,
      url: info[i].url,
    });
  }
  return searchResult;
};

const extractRepoName = (searchResult) => {
  const maxNoOfName = 10;
  const condensedArray = searchResult.slice(0, maxNoOfName);
  const autocompleteSearchInput = condensedArray.map(
    (element) => element.full_name
  );
  return autocompleteSearchInput;
};

module.exports = { extractSearchData, extractRepoName };
