const app = require("../../app");
const request = require("supertest");

describe("GET /repos", () => {
  it("should return a welcome from repo", async () => {
    const response = await request(app).get("/repos");
    expect(response.status).toBe(200);
    expect(response.body).toBe("Welcome from Repos Router");
  });
});
