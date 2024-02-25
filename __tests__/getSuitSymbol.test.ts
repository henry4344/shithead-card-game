import { getSuitSymbol } from "@/app/gameFunctions/getSuitSymbol";

describe("check suit symbol", () => {
  test("heart returns ♥️", () => {
    const symbol = getSuitSymbol("heart");
    expect(symbol).toBe("♥️");
  });
  test("diamond returns ♦️", () => {
    const symbol = getSuitSymbol("diamond");
    expect(symbol).toBe("♦️");
  });
  test("club returns ♣️", () => {
    const symbol = getSuitSymbol("club");
    expect(symbol).toBe("♣️");
  });
  test("spade returns ♠️", () => {
    const symbol = getSuitSymbol("spade");
    expect(symbol).toBe("♠️");
  });
});
