export interface SeededRandom {
  seed: number;
}

export class SeededRandom {
  constructor(seed: number) {
    this.seed = seed % 2147483647;
    if (this.seed <= 0) {
      this.seed += 2147483646;
    }
  }

  // Generate a pseudorandom number between 0 and 1
  random() {
    this.seed = (this.seed * 16807) % 2147483647;
    return this.seed / 2147483647;
  }

  // Generate a pseudorandom integer within a specified range [min, max]
  randomInt(min: number, max: number) {
    return Math.floor(this.random() * (max - min + 1)) + min;
  }
}
