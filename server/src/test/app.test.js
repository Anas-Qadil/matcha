const request = require("supertest");
const { response } = require("../../app");
const app = require("../../app");

describe("Test the root path", () => {
    test("it should response the Get Method", done => {
        request(app)
            .get("/")
            .then(res => {
                expect(res.statusCode).toBe(200);
                done();
            });
    });
})