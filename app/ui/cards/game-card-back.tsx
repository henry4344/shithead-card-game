import clsx from "clsx";
import Image from "next/image";

export default function GameCardBack() {
  const randomTilt = () => Math.random() * 10 - 5;
  return (
    <Image
      className="game-card-back"
      style={{ transform: `rotate(${randomTilt()}deg)` }}
      src="/game-card-back.svg"
      alt="opponent-card-back"
      height={65}
      width={50}
    />
  );
}
