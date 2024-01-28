import Image from "next/image";

export default function OpponentHand() {
  return (
    <Image
      className="opponent-card-hand"
      src="/card-reverse-normal.svg"
      alt="opponent-hand"
      height={60}
      width={45}
    />
  );
}
