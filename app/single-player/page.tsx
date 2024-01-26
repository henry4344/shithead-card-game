import { SeededRandom } from "../actions/seededRandom";
import createDeck from "../gameFunctions/createDeck";
import createHands from "../gameFunctions/setHands";
import Game from "../ui/game/game";

export default function GamePage() {
  const deck = createDeck();
  const hands = createHands(deck);

  const seed = Math.random();
  const seededRandom = new SeededRandom(seed);

  const randomTilt = (): number => seededRandom.random() * 10 - 5;
  const cardTilts = [
    randomTilt(),
    randomTilt(),
    randomTilt(),
    randomTilt(),
    randomTilt(),
    randomTilt(),
    randomTilt(),
    randomTilt(),
    randomTilt(),
  ];

  return <Game deck={deck} hands={hands} cardTilts={cardTilts} />;
}
