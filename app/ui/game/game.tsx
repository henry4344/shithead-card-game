"use client";

import { TCard, TPlayer } from "@/app/lib/definitions";
import Background from "../background";
import SmallCard from "../cards/front-card/small-card";
import GameCardBack from "../cards/game-card-back";
import PlayerCardBack from "../cards/player-card-back";
import Card from "../cards/front-card/card";
import { useEffect, useState } from "react";
import OpponentHand from "../cards/opponent-hand";
import OpponentCardBack from "../cards/oppenent-card-back";
import Hand from "./hand";
import TableOpponent from "./table-opponent";
import TablePlayer from "./table-player";
import TableGame from "./table-game";
import Shithead from "@/app/game-utils/shithead";
import createCardTilts from "@/app/game-utils/create-card-tilts";
var cloneDeep = require("lodash.clonedeep");

interface Hands {
  hand: TCard[];
  playerDown: TCard[];
  playerUp: TCard[];
  opponentHand: TCard[];
  opponentDown: TCard[];
  opponentUp: TCard[];
}

interface GameProps {
  game: Shithead;
  cardTilts: number[];
}

export default function Game() {
  const [initialized, setInitalized] = useState(false);
  const [game, setGame] = useState<Shithead>(new Shithead());
  const [cardTilts, setCardTilts] = useState<number[]>([]);

  const [cardsActive, setCardsActive] = useState<TCard[]>([]);
  const [cardValueSelected, setCardValueSelected] = useState<number>();

  const setCardActive = (index: number, card: TCard) => {
    if (cardsActive.includes(card)) {
      const success = playCard();

      console.log(game.gamePile);
      if (success) return;
      return setCardsActive([]);
    }

    if (cardValueSelected && card.value == cardValueSelected) {
      setCardsActive((prevState) => [...prevState, card]);
    }
    if (card.value != cardValueSelected || !cardValueSelected) {
      setCardsActive([card]);
      setCardValueSelected(card.value);
    }
  };

  useEffect(() => {
    const game = new Shithead();
    game.initializeDeck();
    game.addPlayer("Player1");
    game.addPlayer("AI");
    game.dealCards();

    setGame(game);

    const cardTilts = createCardTilts();
    setCardTilts(cardTilts);

    setInitalized(true);
  }, []);

  useEffect(() => {});

  const pickup = () => {
    const updatedHand = game.pickupCard();
    // Update the state with the new hand

    // Create a deep clone of the game state
    const newGame = cloneDeep(game);
    // Update the state with the new instance
    setGame(newGame);
  };

  const playCard = (): boolean => {
    const success = game.playCard(cardsActive);

    // Create a deep clone of the game state
    const newGame = cloneDeep(game);
    // Update the state with the new instance
    setGame(newGame);
    return success;
  };

  return (
    <>
      <Background />
      {initialized ? (
        <main className="main">
          <div className="above-board">
            <div className="opponent-hand">
              {game.players[1].hand &&
                game.players[1].hand.map((card, index) => (
                  <OpponentHand key={index} />
                ))}
            </div>
          </div>
          <div className="board">
            <TableOpponent
              opponentUp={game.players[1].tableUp}
              opponentDown={game.players[1].tableDown}
              cardTilts={cardTilts}
            />

            <TableGame
              deck={game.deck}
              gamePile={game.gamePile}
              cardTilts={cardTilts}
              pickup={pickup}
            />

            <TablePlayer
              playerUp={game.players[0].tableUp}
              playerDown={game.players[0].tableDown}
              cardTilts={cardTilts}
            />
          </div>
          <Hand
            playerHand={game.players[0].hand}
            cardsActive={cardsActive}
            setCardActive={setCardActive}
            // playCard={playCard}
          />
        </main>
      ) : (
        <>
          <div className="above-board" />
          <div className="board">
            <div className="table opponent-cards" />
            <TableGame
              deck={game.deck}
              gamePile={game.gamePile}
              cardTilts={cardTilts}
              pickup={game.pickupCard}
            />
            <div className="table player-cards" />
          </div>
          <div className="below-board" />
        </>
      )}
    </>
  );
}
