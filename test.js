const assert = require("assert");

const utils = require("./utils");

describe("util functions", () => {
  describe("sum()", () => {
    it("should return 4", () => {
      assert.strictEqual(utils.sum(2, 2), 4);
    });
  });

  describe("multiple()", () => {
    it("should return 6", () => {
      assert.strictEqual(utils.multiple(2, 3), 6);
    });
  });
});
