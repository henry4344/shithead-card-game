"use client";

import { useEffect, useState } from "react";
import Card from "../ui/cards/front-card/card";
import Background from "../ui/background";
import GameCardBack from "../ui/cards/game-card-back";
import OpponentCardBack from "../ui/cards/oppenent-card-back";
import PlayerCardBack from "../ui/cards/player-card-back";
import styles from "./page.module.css";
import { TCard } from "../lib/definitions";
import createDeck from "../gameFunctions/createDeck";
import createHands from "../gameFunctions/setHands";
import SmallCard from "../ui/cards/front-card/small-card";

export default function GamePage() {
  const [hand, setHand] = useState<TCard[]>();
  const [hiddenCards, setHiddenCards] = useState<TCard[]>();
  const [shownCards, setShownCards] = useState<TCard[]>();
  const [oppenentHand, setOpponentHand] = useState<TCard[]>();
  const [opponentHiddenCards, setOpponendHiddenCards] = useState<TCard[]>();
  const [opponentShownCards, setOpponentShownCards] = useState<TCard[]>();
  const [deck, setDeck] = useState<TCard[]>();

  useEffect(() => {
    const deck = createDeck();
    const {
      hand,
      hiddenCards,
      shownCards,
      oppenentHand,
      opponentHiddenCards,
      opponentShownCards,
    } = createHands(deck);

    setHand(hand);
    setHiddenCards(hiddenCards);
    setShownCards(shownCards);
    setOpponentHand(oppenentHand);
    setOpponendHiddenCards(opponentHiddenCards);
    setOpponentShownCards(opponentShownCards);
    setDeck(deck.slice(18));
  }, []);
  return (
    <>
      <Background />
      <main className={styles.main}>
        <div className="above-board">
          <div className="opponent-hand"></div>
        </div>
        <div className="board">
          <div className="table opponent-cards">
            <div className="face-down-cards">
              <OpponentCardBack />
              <OpponentCardBack />
              <OpponentCardBack />
            </div>
            <div className="face-up-cards">
              {opponentShownCards
                ? opponentShownCards.map((card, index) => (
                    <SmallCard
                      key={index}
                      value={card.value}
                      suit={card.suit}
                      cardStyle="opponent-table-card"
                    />
                  ))
                : null}
            </div>
          </div>
          <div className="table game-cards">
            <div className="pickup-cards-holder">
              <div className="pickup-cards">
                <GameCardBack />
                <GameCardBack />
                <GameCardBack />
                <GameCardBack />
                <GameCardBack />
                <GameCardBack />
              </div>
            </div>
            <div className="play-cards"></div>
          </div>
          <div className="table player-cards">
            <div className="face-down-cards">
              <PlayerCardBack />
              <PlayerCardBack />
              <PlayerCardBack />
            </div>
            <div className="face-up-cards">
              {shownCards
                ? shownCards.map((card, index) => (
                    <SmallCard
                      key={index}
                      value={card.value}
                      suit={card.suit}
                      cardStyle="player-table-card"
                    />
                  ))
                : null}
            </div>
          </div>
        </div>
        <div className="below-board">
          <div className="player-hand">
            <div className="hand-cards">
              {hand
                ? hand.map((card, index) => (
                    <Card
                      key={index}
                      value={card.value}
                      suit={card.suit}
                      cardStyle="hand"
                    />
                  ))
                : null}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
