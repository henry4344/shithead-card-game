"use client";

import { TCard } from "@/app/lib/definitions";
import Background from "../background";
import SmallCard from "../cards/front-card/small-card";
import GameCardBack from "../cards/game-card-back";
import PlayerCardBack from "../cards/player-card-back";
import Card from "../cards/front-card/card";
import { useState } from "react";
import OpponentHand from "../cards/opponent-hand";
import OpponentCardBack from "../cards/oppenent-card-back";

interface Hands {
  hand: TCard[];
  hiddenCards: TCard[];
  shownCards: TCard[];
  opponentHand: TCard[];
  opponentHiddenCards: TCard[];
  opponentShownCards: TCard[];
}

export default function Game({
  deck,
  hands,
  cardTilts,
}: {
  deck: TCard[];
  hands: Hands;
  cardTilts: number[];
}) {
  const [hand, setHand] = useState<TCard[]>(hands.hand);
  const [hiddenCards, setHiddenCards] = useState<TCard[]>(hands.hiddenCards);
  const [shownCards, setShownCards] = useState<TCard[]>(hands.shownCards);
  const [opponentHand, setOpponentHand] = useState<TCard[]>(hands.opponentHand);
  const [opponentHiddenCards, setOpponendHiddenCards] = useState<TCard[]>(
    hands.opponentHiddenCards
  );
  const [opponentShownCards, setOpponentShownCards] = useState<TCard[]>(
    hands.opponentShownCards
  );

  const [cardsActive, setCardsActive] = useState<number[]>([]);

  const setCardActive = (index: number) => {
    if (cardsActive.includes(index))
      setCardsActive((prevCards) => prevCards.filter((card) => index !== card));

    if (!cardsActive.includes(index))
      setCardsActive((prevCards) => [...prevCards, index]);
  };

  return (
    <>
      <Background />
      <main className="main">
        <div className="above-board">
          <div className="opponent-hand">
            {opponentHand &&
              opponentHand.map((card, index) => <OpponentHand key={index} />)}
          </div>
        </div>
        <div className="board">
          <div className="table opponent-cards">
            <div className="face-down-cards">
              {opponentHiddenCards &&
                opponentHiddenCards.map((card, index) => (
                  <OpponentCardBack key={index} tilt={cardTilts[index]} />
                ))}
            </div>
            <div className="face-up-cards">
              {opponentShownCards &&
                opponentShownCards.map((card, index) => (
                  <SmallCard
                    key={index}
                    value={card.value}
                    suit={card.suit}
                    cardStyle="opponent-table-card"
                  />
                ))}
            </div>
          </div>
          <div className="table game-cards">
            <div className="pickup-cards-holder">
              <div className="pickup-cards">
                <GameCardBack tilt={cardTilts[1]} />
                <GameCardBack tilt={cardTilts[2]} />
                <GameCardBack tilt={cardTilts[3]} />
                <GameCardBack tilt={cardTilts[4]} />
                <GameCardBack tilt={cardTilts[5]} />
                <GameCardBack tilt={cardTilts[6]} />
              </div>
            </div>
            <div className="play-cards"></div>
          </div>
          <div className="table player-cards">
            <div className="face-down-cards">
              {hiddenCards &&
                hiddenCards.map((card, index) => (
                  <PlayerCardBack key={index} tilt={cardTilts[index]} />
                ))}
            </div>
            <div className="face-up-cards">
              {shownCards &&
                shownCards.map((card, index) => (
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
        </div>
        <div className="below-board">
          <div className="player-hand">
            <div className="hand-cards">
              {hand &&
                hand.map((card, index) => (
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
      </main>
    </>
  );
}
