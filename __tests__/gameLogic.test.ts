import {
  checkFourInRow,
  checkMove,
  getActionCard,
  getLastThree,
  handle5,
  handleCard,
} from "@/app/game-utils/game-logic";
// const { checkMove } = require("@/app/game-utils/game-logic");
// const { TCard } = require("@/app/lib/definitions");

describe("tests game logic functions", () => {
  it("get last three from big pile", () => {
    const playCard = { value: 4, suit: "heart" };
    const gamePile = [
      { value: 3, suit: "club" },
      { value: 4, suit: "club" },
      { value: 5, suit: "club" },
      { value: 6, suit: "club" },
      { value: 7, suit: "club" },
    ];

    const result = getLastThree(gamePile);
    const expectedRes = [
      { value: 5, suit: "club" },
      { value: 6, suit: "club" },
      { value: 7, suit: "club" },
    ];
    expect(result).toEqual(expectedRes);
  });

  it("checks four in a row sucess", () => {
    const playCard = { value: 4, suit: "heart" };
    const lastThree = [
      { value: 4, suit: "heart" },
      { value: 4, suit: "heart" },
      { value: 4, suit: "heart" },
    ];
    const result = checkFourInRow(lastThree, playCard);
    expect(result).toBe(true);
  });

  it("checks four in a row fail", () => {
    const playCard = { value: 4, suit: "heart" };
    const lastThree = [
      { value: 3, suit: "heart" },
      { value: 4, suit: "heart" },
      { value: 4, suit: "heart" },
    ];
    const result = checkFourInRow(lastThree, playCard);
    expect(result).toBe(false);
  });

  it("get action card, 7 top", () => {
    const gamePile = [
      { value: 3, suit: "club" },
      { value: 4, suit: "club" },
      { value: 5, suit: "club" },
      { value: 6, suit: "club" },
      { value: 7, suit: "club" },
      { value: 7, suit: "club" },
    ];

    const result = getActionCard(gamePile);
    const expectedRes = 6;

    expect(result).toEqual(expectedRes);
  });

  it("get action card, 7 top", () => {
    const gamePile = [
      { value: 3, suit: "club" },
      { value: 4, suit: "club" },
      { value: 5, suit: "club" },
      { value: 6, suit: "club" },
    ];

    const result = getActionCard(gamePile);
    const expectedRes = 6;

    expect(result).toEqual(expectedRes);
  });

  it("check 5 action card: card lower success", () => {
    const playCard = 4;
    expect(handle5(playCard)).toBe(true);
  });
  it("check 5 action card: card same success", () => {
    const playCard = 5;
    expect(handle5(playCard)).toBe(true);
  });
  it("check 5 action card fail", () => {
    const playCard = 6;
    expect(handle5(playCard)).toBe(false);
  });

  it("check valid move: card higher, success", () => {
    const playCard = 10;
    const actionCard = 6;
    expect(handleCard(playCard, actionCard)).toBe(true);
  });
  it("check valid move: cards equal, success", () => {
    const playCard = 6;
    const actionCard = 6;
    expect(handleCard(playCard, actionCard)).toBe(true);
  });

  it("check valid move, fail", () => {
    const playCard = 4;
    const actionCard = 6;
    expect(handleCard(playCard, actionCard)).toBe(false);
  });

  it("checks a valid move: higher card on lower, success", () => {
    const playCard = { value: 4, suit: "spade" };
    const gamePile = [{ value: 3, suit: "spade" }];
    const result = checkMove(playCard, gamePile);
    expect(result.success).toBe(true);
  });

  it("checks a valid move: cards are same, success", () => {
    const playCard = { value: 4, suit: "spade" };
    const gamePile = [{ value: 4, suit: "heart" }];
    const result = checkMove(playCard, gamePile);
    expect(result.success).toBe(true);
  });

  it("checks a valid move: card is lower, fail", () => {
    const playCard = { value: 4, suit: "spade" };
    const gamePile = [{ value: 8, suit: "heart" }];
    const result = checkMove(playCard, gamePile);
    expect(result.success).toBe(false);
  });
});
