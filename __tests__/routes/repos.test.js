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
        items: {},
      },
    });
    const response = await request(app).get("/repos");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      autocompleteSearchInput: [],
      searchResult: [],
    });
    expect(moxios.requests.mostRecent().url).toBe(
      "https://api.github.com/search/repositories?q=/react"
    );
  });

  it("should return 500 and error message when there is error", async () => {
    const error = new Error("Error: Request failed with status code 500");
    moxios.stubRequest(/api.github.com\/search\/repositories\?q=\//, {
      status: 500,
      response: { error },
    });
    const response = await request(app).get("/repos");

    expect(response.status).toBe(500);
    expect(response.body.message).toBe("Request failed with status code 500");
    expect(moxios.requests.mostRecent().url).toBe(
      "https://api.github.com/search/repositories?q=/react"
    );
  });
});
