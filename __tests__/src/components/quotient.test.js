const quotient = require("../../../src/components/quotient");

test("divides 1 / 2 to equal .5", () => {
  expect(quotient(1)(2)).toBe(0.5);
});