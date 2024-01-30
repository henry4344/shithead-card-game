import { TCard, TPlayer } from "../lib/definitions";
import { checkMove } from "./game-logic";

export default class Shithead {
  deck: TCard[] = [];
  players: TPlayer[] = [];
  currentPlayerIndex: number;
  gamePile: TCard[] = [];

  constructor() {
    this.deck = this.initializeDeck();
    this.players = [];
    this.currentPlayerIndex = 0;
    this.gamePile = [];
  }

  initializeDeck(): TCard[] {
    function shuffleDeck(deck: TCard[]) {
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
      return deck;
    }

    const CARD_VALS: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const SUITS: string[] = ["heart", "diamond", "club", "spade"];

    const deck: TCard[] = CARD_VALS.flatMap((value: number) => {
      return SUITS.map((suit: string) => ({ value, suit }));
    });

    return shuffleDeck(deck);
  }

  addPlayer(playerName: string) {
    this.players.push({
      name: playerName,
      hand: [],
      tableUp: [],
      tableDown: [],
    });
  }

  dealCards() {
    // Deal 3 face-down cards to each player
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < this.players.length; j++) {
        const card = this.deck.pop();
        if (card) {
          this.players[j].tableDown.push(card);
        }
      }
    }

    // Deal 3 face-up cards to each player
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < this.players.length; j++) {
        const card = this.deck.pop();
        if (card) {
          this.players[j].tableUp.push(card);
        }
      }
    }

    // Deal 3 cards in hand to each player
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < this.players.length; j++) {
        const card = this.deck.pop();
        if (card) {
          this.players[j].hand.push(card);
        }
      }
    }
  }

  checkPlayerMove(cardIndex: number) {
    const playCard =
      this.players[this.currentPlayerIndex].hand[cardIndex].value;
    const gameCard = this.gamePile[this.gamePile.length - 1].value;

    const isLegal = checkMove(playCard, gameCard);

    if (this.currentPlayerIndex == 0) this.currentPlayerIndex = 1;
    if (this.currentPlayerIndex == 1) this.currentPlayerIndex = 0;
  }

  pickupCard() {
    console.log("clicked");
    console.log(this.players);
    console.log(this.currentPlayerIndex);

    if (this.deck.length == 0) return;

    // Remove the top card from the deck
    const newDeck: TCard[] = [...this.deck];
    const drawnCard = newDeck.pop() as TCard;

    // Update the player's hand
    const updatedPlayers = [...this.players];
    updatedPlayers[this.currentPlayerIndex].hand.push(drawnCard);

    // Update the state of the game
    this.deck = newDeck;
    this.players = updatedPlayers;

    return this.players[this.currentPlayerIndex].hand;
  }
}
