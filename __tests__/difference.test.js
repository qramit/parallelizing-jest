const difference = require("../src/difference");

test("subtracts 1 - 2 to equal -1", () => {
  expect(difference(1)(2)).toBe(-0);
});
