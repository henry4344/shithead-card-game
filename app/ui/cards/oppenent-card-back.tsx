import Image from "next/image";

export default function OpponentCardBack() {
  const randomTilt = () => Math.random() * 10 - 5;

  return (
    <Image
      className="card"
      style={{ transform: `rotate(${randomTilt()}deg)` }}
      src="/opponent-card-back.svg"
      alt="opponent-card-back"
      height={60}
      width={45}
    />
  );
}
