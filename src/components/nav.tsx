import styles from "./nav.module.scss";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useScrollPosition } from "../hooks/useScrollPosition";
import Link from "./link";

const Nav = () => {
  const scrollPosition = useScrollPosition();
  const [collapsed, setCollapsed] = useState(true);
  const router = useRouter();
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
          <Link
            href="/"
            className={router.pathname === "/" ? styles.selected : ""}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            href="/a_propos"
            className={router.pathname === "/a_propos" ? styles.selected : ""}
          >
            Présentation
          </Link>
        </li>
        <li>
          <Link
            href="/actualite"
            className={router.pathname === "/actualite" ? styles.selected : ""}
          >
            Actualités
          </Link>
        </li>
        <li>
          <Link
            href="/ressources"
            className={router.pathname === "/ressources" ? styles.selected : ""}
          >
            Ressources
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={router.pathname === "/contact" ? styles.selected : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
