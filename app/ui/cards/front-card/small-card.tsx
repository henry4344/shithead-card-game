import clsx from "clsx";
import {
  getSuitColour,
  getSuitSymbol,
} from "../../../gameFunctions/getSuitSymbol";
import { TCardValues } from "../../../lib/definitions";
import styles from "./cards.module.css";

const NUMBER_VISUAL: TCardValues = {
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

export default function SmallCard({
  value,
  suit,
  cardStyle,
  playerCard,
}: {
  value: number;
  suit: string;
  cardStyle: string;
  playerCard?: boolean;
}) {
  function Number({ value, cardStyle }: { value: number; cardStyle: string }) {
    return (
      <span className={clsx("small-number", `${cardStyle}-number`)}>
        {NUMBER_VISUAL[value]}
      </span>
    );
  }

  function Suit({ suit, cardStyle }: { suit: string; cardStyle: string }) {
    return (
      <div className={clsx("small-suit", `${cardStyle}-suit`)}>
        {getSuitSymbol(suit)}
      </div>
    );
  }
  return (
    <div
      className={clsx(
        styles.card,
        getSuitColour(suit),
        cardStyle,
        playerCard && "player-card"
      )}
    >
      <Number value={value} cardStyle={cardStyle} />
      <Suit suit={suit} cardStyle={cardStyle} />
    </div>
  );
}
