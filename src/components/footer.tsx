import styles from "./footer.module.scss";
import Link from "./link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul>
          <li>
            <Link href="/mentions_legales">Mentions légales</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
