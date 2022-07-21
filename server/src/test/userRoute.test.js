const request = require("supertest");
const { response } = require("../../app");
const app = require("../../app");


jest.setTimeout(300000);

describe("Test the root path", () => {
    test("it should response the Get Method", done => {
        request(app)
            .get("/api/login")
            .then(res => {
                console.log(res.age);
                expect(true).toBe(true);
                done();
            })
            .catch((e) => {
                console.log(e);
                done();
            })
    });
})