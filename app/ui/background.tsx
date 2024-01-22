import Image from "next/image";

export default function Background() {
  return (
    <div className="background">
      <Image
        className="background-img"
        height={100}
        width={100}
        src="/background.svg"
        alt="Background"
        layout="responsive"
      />
    </div>
  );
}
