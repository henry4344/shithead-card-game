const randomTilt = (): number => Math.random() * 10 - 5;
export default function createCardTilts() {
  return [
    randomTilt(),
    randomTilt(),
    randomTilt(),
    randomTilt(),
    randomTilt(),
    randomTilt(),
    randomTilt(),
    randomTilt(),
    randomTilt(),
  ];
}
