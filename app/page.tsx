import styles from "./page.module.css";
import Button from "./components/buttons";
import Link from "next/link";
import Background from "./ui/background";

export default function Home() {
  return (
    <>
      <Background />

      <main className={styles.main}>
        <div className={styles.gameSelections}>
          <Link className="button" href="/single-player">
            Single Player
          </Link>
          <Link className="button" href="/online">
            Online Game
          </Link>
        </div>
      </main>
    </>
  );
}
