"use client";

import styles from "./nav.module.scss";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useScrollPosition } from "../hooks/useScrollPosition";
import Link from "./link";

export default function Nav() {
  const scrollPosition = useScrollPosition();
  const [collapsed, setCollapsed] = useState(true);
  const pathname = usePathname();
  const fixed = scrollPosition && scrollPosition.y !== 0;

  return (
    <nav
      className={[
        styles.nav,
        ...(fixed ? [styles.fixed] : []),
        ...(collapsed ? [styles.collapsed] : []),
      ].join(" ")}
    >
      <button onClick={() => setCollapsed(!collapsed)}>
        <span>{collapsed ? "🔽" : "🔼"} Menu</span>
      </button>
      <ul>
        <li>
          <Link href="/" className={pathname === "/" ? styles.selected : ""}>
            Accueil
          </Link>
        </li>
        <li>
          <Link
            href="/a_propos"
            className={pathname === "/a_propos" ? styles.selected : ""}
          >
            Présentation
          </Link>
        </li>
        <li>
          <Link
            href="/actualite"
            className={pathname === "/actualite" ? styles.selected : ""}
          >
            Actualités
          </Link>
        </li>
        <li>
          <Link
            href="/ressources"
            className={pathname === "/ressources" ? styles.selected : ""}
          >
            Ressources
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={pathname === "/contact" ? styles.selected : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
