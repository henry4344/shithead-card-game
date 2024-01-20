const { getSuitColour } = require("../app/gameFunctions/getSuitSymbol");

describe("check suit symbol", () => {
  test("heart returns red", () => {
    const symbol = getSuitColour("heart");
    expect(symbol).toBe("red");
  });
  test("diamond returns red", () => {
    const symbol = getSuitColour("diamond");
    expect(symbol).toBe("red");
  });
  test("club returns black", () => {
    const symbol = getSuitColour("club");
    expect(symbol).toBe("black");
  });
  test("spade returns black", () => {
    const symbol = getSuitColour("spade");
    expect(symbol).toBe("black");
  });
});
