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

export interface Hand {
  value: number;
  suit: string;
}
