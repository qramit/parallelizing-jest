const product = require("./src/product");

test("multiplies 1 * 2 to equal 2", () => {
  expect(product(1)(2)).toBe(2);
});
