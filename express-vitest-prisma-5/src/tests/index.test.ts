import {describe, expect, it, vi} from 'vitest';
import request from "supertest";
import { app } from "../index"
import { prismaClient } from "../__mocks__/db";

console.log(Object.keys(prismaClient.request.create));

vi.mock('../db');

describe("POST /sum", () => {
  it("should return the sum of two numbers", async () => {
      const res = await request(app).post("/sum").send({
        a: 1,
        b: 2
      });
      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(3);
    });

    it("should return 411 if no inputs are provided", async () => {
      const res = await request(app).post("/sum").send({});
      expect(res.statusCode).toBe(411);
      expect(res.body.message).toBe("Incorrect inputs");
    });

});


describe("GET /sum", () => {
  it("should return the sum of two numbers", async () => {
      const res = await request(app)
        .get("/sum")
        .set({
          a: "1",
          b: "2"
        })
        .send();
      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(3);
  });

  it("should return 411 if no inputs are provided", async () => {
    const res = await request(app)
      .get("/sum").send();
    expect(res.statusCode).toBe(411);
  });

});

describe("POST /multiply", () => {
  it("should return the multiply of two numbers", async () => {
      const res = await request(app).post("/multiply").send({
        a: 3,
        b: 2
      });
      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(6);
    });

    it("should return 411 if no inputs are provided", async () => {
      const res = await request(app).post("/multiply").send({});
      expect(res.statusCode).toBe(411);
      expect(res.body.message).toBe("Incorrect inputs");
    });
});