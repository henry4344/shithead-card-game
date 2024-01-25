import Image from "next/image";

export default function PlayerCardBack() {
  return (
    <Image
      className="card"
      src="/player-card-back.svg"
      alt="player-card-back"
      height={70}
      width={55}
    />
  );
}
