import styles from "./footer.module.scss";
import React from "react";
import Link from "./link";

const Footer = () => (
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

export default Footer;
