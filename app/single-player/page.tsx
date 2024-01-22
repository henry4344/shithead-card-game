"use client";

import { useState } from "react";
import Card from "../components/card";
import Background from "../ui/background";
import GameCardBack from "../ui/cards/game-card-back";
import OpponentCardBack from "../ui/cards/oppenent-card-back";
import PlayerCardBack from "../ui/cards/player-card-back";
import styles from "./page.module.css";
import { Hand } from "../lib/definitions";

export default function GamePage() {
  const [hand, setHand] = useState<Hand[]>([
    { value: 2, suit: "heart" },
    { value: 10, suit: "diamond" },
    { value: 5, suit: "club" },
  ]);
  return (
    <>
      <Background />
      <main className={styles.main}>
        <div className="above-board">
          <div className="opponent-hand"></div>
        </div>
        <div className="board">
          <div className="table opponent-cards">
            <OpponentCardBack />
            <OpponentCardBack />
            <OpponentCardBack />
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
            <PlayerCardBack />
            <PlayerCardBack />
            <PlayerCardBack />
          </div>
        </div>
        <div className="below-board">
          <div className="player-hand">
            <div className="hand-cards">
              {hand.map((card, index) => (
                <Card
                  key={index}
                  index={index}
                  value={card.value}
                  suit={card.suit}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
