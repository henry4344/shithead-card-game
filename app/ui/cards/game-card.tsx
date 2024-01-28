import SmallCard from "./front-card/small-card";

interface GameCardProps {
  value: number;
  suit: string;
  tilt: number;
}

export default function GameCard({ value, suit, tilt }: GameCardProps) {
  return <SmallCard value={value} suit={suit} cardStyle="game-card" />;
}
