export interface Suits {
  heart: string;
  diamond: string;
  club: string;
  spade: string;
}

export interface Heart {
  heart: string;
}
export interface Diamond {
  diamond: string;
}
export interface Club {
  club: string;
}
export interface Spade {
  spade: string;
}

export interface TCard {
  value: number;
  suit: string;
}

export interface TCardValues {
  [key: number]: number | string;
}

export interface TPlayer {
  name: string;
  hand: TCard[];
  tableUp: TCard[];
  tableDown: TCard[];
}

export interface TMove {
  success: boolean;
  splitDeck?: boolean;
}
