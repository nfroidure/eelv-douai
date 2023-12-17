"use client";

import styles from "./header.module.scss";
import { NAME } from "../utils/constants";
import { useScrollPosition } from "../hooks/useScrollPosition";
import Link from "./link";

export default function Header() {
  const scrollPosition = useScrollPosition();
  const visible = !scrollPosition || scrollPosition.y === 0;

  return (
    <header
      className={[styles.header, ...(visible ? [styles.visible] : [])].join(
        " "
      )}
    >
      <h1 className={styles.logo}>
        <Link href="/">
          <img src={"/images/Logo - EELV Douaisis.svg"} alt={NAME} />
        </Link>
      </h1>
    </header>
  );
}
