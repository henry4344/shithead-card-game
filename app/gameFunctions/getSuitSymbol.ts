export const getSuitSymbol = (suit: string) => {
  switch (suit) {
    case "heart":
      return "♥️";
    case "diamond":
      return "♦️";
    case "club":
      return "♣️";
    case "spade":
      return "♠️";
  }
};

export const getSuitColour = (suit: string) => {
  switch (suit) {
    case "heart":
      return "red";
    case "diamond":
      return "red";
    case "spade":
      return "black";
    case "club":
      return "black";
  }
};
