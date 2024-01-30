import { TCard } from "@/app/lib/definitions";
import PlayerCardBack from "../cards/player-card-back";
import SmallCard from "../cards/front-card/small-card";

export default function TablePlayer({
  playerUp,
  playerDown,
  cardTilts,
}: {
  playerUp: TCard[];
  playerDown: TCard[];
  cardTilts: number[];
}) {
  return (
    <div className="table player-cards">
      <div className="face-down-cards">
        {playerDown &&
          playerDown.map((card, index) => (
            <PlayerCardBack key={index} tilt={cardTilts[index]} />
          ))}
      </div>
      <div className="face-up-cards">
        {playerUp &&
          playerUp.map((card, index) => (
            <SmallCard
              key={index}
              value={card.value}
              suit={card.suit}
              cardStyle="player-table-card"
              playerCard={true}
            />
          ))}
      </div>
    </div>
  );
}
