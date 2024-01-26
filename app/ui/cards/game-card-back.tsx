import Image from "next/image";

export default function GameCardBack({ tilt }: { tilt: number }) {
  return (
    <Image
      className="card game-card-back"
      style={{ transform: `rotate(${tilt}deg)` }}
      src="/game-card-back.svg"
      alt="opponent-card-back"
      height={65}
      width={50}
    />
  );
}
