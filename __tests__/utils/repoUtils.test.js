const { extractSearchData, extractRepoName } = require("../../utils/repoUtils");

const mockGitHubResponse = [
  {
    id: 10270250,
    node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
    name: "react",
    full_name: "facebook/react",
    private: false,
    html_url: "https://github.com/facebook/react",
    description:
      "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    fork: false,
    url: "https://api.github.com/repos/facebook/react",
    stargazers_count: 146827,
  },
  {
    id: 75396575,
    node_id: "MDEwOlJlcG9zaXRvcnk3NTM5NjU3NQ==",
    name: "react",
    full_name: "duxianwei520/react",
    private: false,
    html_url: "https://github.com/duxianwei520/react",
    description: " React+webpack+redux+ant design+axios+less全家桶后台管理框架",
    fork: false,
    url: "https://api.github.com/repos/duxianwei520/react",
    stargazers_count: 3539,
  },
];

const expectedResult = [
  {
    full_name: "facebook/react",
    description:
      "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    stars: 146827,
    url: "https://github.com/facebook/react",
  },
  {
    full_name: "duxianwei520/react",
    description: " React+webpack+redux+ant design+axios+less全家桶后台管理框架",
    stars: 3539,
    url: "https://github.com/duxianwei520/react",
  },
];

describe("Extract Search Data", () => {
  it("should successfully process the response from GitHub Search API and return the expected results", () => {
    expect(extractSearchData(mockGitHubResponse)).toEqual(expectedResult);
  });

  it("should return empty array when the GitHub Search API does not give any result", () => {
    const mockEmptyGitHubResponse = [];
    expect(extractSearchData(mockEmptyGitHubResponse)).toEqual([]);
  });
});

describe("Extract Repo Name", () => {
  it("should successfully extract the repo name from the Search Result to be used for the Autocomplete Search Suggestion", () => {
    const searchResult = extractSearchData(mockGitHubResponse);
    expect(extractRepoName(searchResult)).toEqual([
      "facebook/react",
      "duxianwei520/react",
    ]);
  });

  it("should return empty array when the GitHub Search API does not give any result", () => {
    const mockEmptyGitHubResponse = [];
    const searchResult = extractSearchData(mockEmptyGitHubResponse);
    expect(extractRepoName(searchResult)).toEqual([]);
  });
});
