var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { describe, expect, it } from '@jest/globals';
import request from "supertest";
import { app } from "../index";
describe("POST /sum", () => {
    it("should return the sum of two numbers", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(app).post("/sum").send({
            a: 1,
            b: 2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    }));
    it("should return the sum of two negative numbers", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(app).post("/sum").send({
            a: -1,
            b: -2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(-3);
    }));
    it("should return the sum of two zero number", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(app).post("/sum").send({
            a: 0,
            b: 0
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(0);
    }));
});
