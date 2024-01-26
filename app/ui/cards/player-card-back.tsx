import Image from "next/image";

export default function PlayerCardBack({ tilt }: { tilt: number }) {
  return (
    <Image
      className="card"
      style={{ transform: `rotate(${tilt}deg)` }}
      src="/player-card-back.svg"
      alt="player-card-back"
      height={70}
      width={55}
    />
  );
}
