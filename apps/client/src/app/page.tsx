import { Home } from "./components/Home";
import styles from "./components/Home.module.css";

export default function Page() {
  return (
    <main className={styles.page}>
      <Home />
    </main>
  );
}
