const app = require("../../app");
const request = require("supertest");
const moxios = require("moxios");

describe("GET /repos", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("should mock fetch Github Search API as well as return 200 and response", async () => {
    moxios.stubRequest(/api.github.com\/search\/repositories\?q=\//, {
      status: 200,
      response: {
        suggestionArray: [],
        resultArray: [],
      },
    });
    const response = await request(app).get("/repos");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      suggestionArray: [],
      resultArray: [],
    });
    expect(moxios.requests.mostRecent().url).toBe(
      "https://api.github.com/search/repositories?q=/react"
    );
  });
});
