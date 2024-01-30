import { TCard } from "../lib/definitions";

export default function createHands(deck: TCard[]) {
  const hand = deck.slice(0, 3);
  const hiddenCards = deck.slice(3, 6);
  const shownCards = deck.slice(6, 9);
  const opponentHand = deck.slice(9, 12);
  const opponentHiddenCards = deck.slice(12, 15);
  const opponentShownCards = deck.slice(15, 18);
  return {
    hand,
    hiddenCards,
    shownCards,
    opponentHand,
    opponentHiddenCards,
    opponentShownCards,
  };
}
