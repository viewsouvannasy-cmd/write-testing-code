import { describe, it, expect } from "vitest";

import { average } from "../../src/utils/average";

describe("test average function", () => {
  it("return error message when value it not number", () => {
    const text = ["djdjd", "dkdk"].map((item) => Number(item));
    expect(() => average(text)).toThrow("Not implemented this value");
  });

  it("return 2 as the value be [1 , 2 ,3]", () => {
    expect(average([1, 2, 3])).toBe(2);
  });

  it("return 0 as value of [0]", () => {
    expect(average([0])).toBe(0);
  });

  it("throw error as velue of [2, NaN , 3]", () => {
    const text = [1, "sd", 3].map((item) => Number(item));
    expect(() => average(text)).toThrow("Not implemented this value");
  });

  it("it throw error when average as []", () => {
    expect(() => average([])).toThrow("Not implemented this value");
  });
});
