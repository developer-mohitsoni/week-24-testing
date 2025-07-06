import {describe, expect, it} from "@jest/globals"
import {mul, sum} from "../index"

describe('Testing All The Calculator Functionlaity', ()=>{

  describe("Testing Sum Function", ()=>{
    it("should sum 1 and 2 correctly", ()=>{
      const finalAnswer = sum(1, 2)
      expect(finalAnswer).toBe(3)
      // expect(sum(1, 2)).toBe(3)
    })
  });

  describe("Testing Sum Function with negative numbers", ()=>{
    it("should sum -1 and -2 correctly", ()=>{
      expect(sum(-1, -2)).toBe(-3)
    })
  });

  describe('Testing Multiply Function', ()=>{
    it("should multiply 1 and 2 correctly", ()=>{
      expect(mul(1, 2)).toBe(2)
    })
  })
})