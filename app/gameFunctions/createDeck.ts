import { TCard } from "../lib/definitions";

export default function createDeck(): TCard[] {
  const CARD_VALS: number[] = Array.from(Array(13), (_, index) => index + 2);
  const SUITS: string[] = ["heart", "diamond", "club", "spade"];

  const deck: TCard[] = CARD_VALS.flatMap((value: number) => {
    return SUITS.map((suit: string) => ({ value, suit }));
  });

  return shuffleDeck(deck);
}

function shuffleDeck(deck: TCard[]) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}
