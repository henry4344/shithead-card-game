import Image from "next/image";

export default function OpponentCardBack({ tilt }: { tilt: number }) {
  return (
    <Image
      className="card"
      style={{ transform: `rotate(${tilt}deg)` }}
      src="/opponent-card-back.svg"
      alt="opponent-card-back"
      height={60}
      width={45}
    />
  );
}
