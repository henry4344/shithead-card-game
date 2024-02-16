import { TCard } from "@/app/lib/definitions";
import GameCardBack from "../cards/game-card-back";
import SmallCard from "../cards/front-card/small-card";

export default function TableGame({
  deck,
  gamePile,
  cardTilts,
  pickup,
}: {
  deck: TCard[];
  gamePile: TCard[];
  cardTilts: number[];
  pickup(): void;
}) {
  // const [deckPile, setDeckPile] = useState(Math.ceil(deck.length / 10 + 0.89));
  const deckPile = Math.floor(Math.min(deck.length, 34) / 5 + 0.89);

  return (
    <div className="table game-cards">
      <div className="pickup-cards-holder">
        <div className="pickup-cards" onClick={() => pickup()}>
          {/* <div onClick={() => pickup()}> */}
          {deck &&
            Array.from({ length: deckPile }).map((_, i) => (
              <GameCardBack key={i} tilt={cardTilts[i]} />
            ))}
        </div>
      </div>
      <div className="play-cards">
        {gamePile &&
          gamePile.map((card, index) => (
            <SmallCard
              key={index}
              value={card.value}
              suit={card.suit}
              cardStyle="game-card"
            />
          ))}
      </div>
    </div>
  );
}
