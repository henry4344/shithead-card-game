import clsx from "clsx";
import { getSuitColour, getSuitSymbol } from "../gameFunctions/getSuitSymbol";
import { Suits, Heart, Diamond, Spade, Club } from "../lib/definitions";
import styles from "./cards.module.css";

const NUMBER_VISUAL = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  11: "J",
  12: "Q",
  13: "K",
  14: "A",
};

export default function Card({
  value,
  suit,
  index,
}: {
  value: number;
  suit: string;
  index: number;
}) {
  function NumberSuit({
    value,
    suit,
    bottom,
  }: {
    value: number;
    suit: string;
    bottom?: boolean;
  }) {
    const style = clsx(styles.number);
    return (
      <div className={styles.numberSuitHolder}>
        <div className={clsx(styles.numberSuit, bottom && styles.bottomCard)}>
          <span className={styles.number}>{value}</span>
          <span>{getSuitSymbol(suit)}</span>
        </div>
        <div className={clsx(styles.numberSuit, bottom && styles.bottomCard)}>
          <span className={styles.number}>{value}</span>
          <span>{getSuitSymbol(suit)}</span>
        </div>
      </div>
    );
  }

  function Suit({ suit }: { suit: string }) {
    return <div className={styles.middleSuit}>{getSuitSymbol(suit)}</div>;
  }
  return (
    <div className={clsx(styles.card, getSuitColour(suit))}>
      <NumberSuit value={value} suit={suit} />
      <Suit suit={suit} />
      <NumberSuit value={value} suit={suit} bottom={true} />
    </div>
  );
}
