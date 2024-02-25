import { TCard, TMove } from "../lib/definitions";
import GameCard from "../ui/cards/game-card";

export function handle5(cardVal: number) {
  if (cardVal <= 5) return true;
  return false;
}

export function handleCard(cardVal: number, actionCard: number) {
  if (cardVal >= actionCard) return true;
  return false;
}

export function getLastThree(gamePile: TCard[]) {
  if (gamePile.length < 3) return gamePile;

  const lastThree = gamePile.slice(gamePile.length - 3);
  return lastThree;
}

export function checkFourInRow(lastThree: TCard[], playCard: TCard) {
  const [card1, card2, card3] = lastThree;
  if (
    card1.value === card2.value &&
    card2.value === card3.value &&
    card1.value === playCard.value
  ) {
    // 4 of the same
    console.log("four in a row");
    return true;
  }
  return false;
}

export function getActionCard(gamePile: TCard[]): number {
  const reversedGamePile = [...gamePile].reverse();
  for (const card of reversedGamePile) {
    if (card.value != 7) return card.value;
  }
  return gamePile[0].value;
}

export function isMagic(value: number) {
  const magicNumbers = [2, 5, 7, 10];
  return magicNumbers.includes(value);
}

export function checkMove(playCard: TCard, gamePile: TCard[]): TMove {
  // no pile, accept any card
  if (gamePile.length === 0) return { success: true };

  // get the prev 3 (1-3) cards
  const lastThree = getLastThree(gamePile);

  // check if 4 same in row -> split if true
  if (lastThree.length == 3) {
    const splitDeck = checkFourInRow(lastThree, playCard);
    if (splitDeck) return { success: true, splitDeck };
  }

  // if 10 play anything, split deck
  if (playCard.value === 10) return { success: true, splitDeck: true };

  // if magic, play anything
  if (isMagic(playCard.value)) return { success: true };

  const actionCard = getActionCard(gamePile);
  console.log(actionCard);
  if (actionCard == 5) return { success: handle5(playCard.value) };

  return { success: handleCard(playCard.value, actionCard) };
}
