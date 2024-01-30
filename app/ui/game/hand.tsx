import { TCard } from "@/app/lib/definitions";
import Card from "../cards/front-card/card";
import { useState } from "react";

export default function Hand({ playerHand }: { playerHand: TCard[] }) {
  const [cardsActive, setCardsActive] = useState<number[]>([]);

  const setCardActive = (index: number) => {
    if (cardsActive.includes(index))
      setCardsActive((prevCards) => prevCards.filter((card) => index !== card));

    if (!cardsActive.includes(index))
      setCardsActive((prevCards) => [...prevCards, index]);
  };

  return (
    <div className="below-board">
      <div className="player-hand">
        <div className="hand-cards">
          {playerHand &&
            playerHand.map((card, index) => (
              <Card
                key={index}
                index={index}
                value={card.value}
                suit={card.suit}
                cardStyle="hand"
                setCardActive={setCardActive}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
