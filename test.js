const assert = require("assert");

const utils = require("./utils");

describe("util functions", () => {
  describe("sum()", () => {
    it("should return 4", () => {
      assert.strictEqual(utils.sum(2, 2), 4);
    });
  });
});
