import { TCard } from "@/app/lib/definitions";
import OpponentCardBack from "../cards/oppenent-card-back";
import SmallCard from "../cards/front-card/small-card";

export default function TableOpponent({
  opponentUp,
  opponentDown,
  cardTilts,
}: {
  opponentUp: TCard[];
  opponentDown: TCard[];
  cardTilts: number[];
}) {
  return (
    <div className="table opponent-cards">
      <div className="face-down-cards">
        {opponentDown &&
          opponentDown.map((card, index) => (
            <OpponentCardBack key={index} tilt={cardTilts[index]} />
          ))}
      </div>
      <div className="face-up-cards">
        {opponentUp &&
          opponentUp.map((card, index) => (
            <SmallCard
              key={index}
              value={card.value}
              suit={card.suit}
              cardStyle="opponent-table-card"
            />
          ))}
      </div>
    </div>
  );
}
