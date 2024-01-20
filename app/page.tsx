import styles from "./page.module.css";
import Button from "./components/buttons";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.pb}>💩 Shithead 💩</h1>
      <div className={styles.gameSelections}>
        <Link className="button" href="/single-player">
          Single Player
        </Link>
        <Link className="button" href="/online">
          Online Game
        </Link>
      </div>
    </main>
  );
}
