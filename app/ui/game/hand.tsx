import { TCard } from "@/app/lib/definitions";
import Card from "../cards/front-card/card";
import { useState } from "react";

interface HandProps {
  playerHand: TCard[];
  cardsActive: TCard[];
  setCardActive(index: number, card: TCard): void;
  // playCard(activeCards: number[]): void;
}

export default function Hand({
  playerHand,
  cardsActive,
  setCardActive,
}: // playCard,
HandProps) {
  return (
    <div className="below-board">
      <div className="player-hand">
        <div className="hand-cards">
          {playerHand &&
            playerHand.map((card, index) => (
              <Card
                key={index}
                index={index}
                card={card}
                // value={card.value}
                // suit={card.suit}
                cardStyle="hand"
                cardsActive={cardsActive}
                setCardActive={setCardActive}
                // playCard={playCard}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
