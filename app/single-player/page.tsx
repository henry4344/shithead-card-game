import Card from "../components/card";
import styles from "./page.module.css";

export default function GamePage() {
  return (
    <main className={styles.main}>
      <div className={styles.playerCards}>
        <Card value={2} suit="heart" />
        <Card value={6} suit="diamond" />
        <Card value={4} suit="spade" />
      </div>
    </main>
  );
}
