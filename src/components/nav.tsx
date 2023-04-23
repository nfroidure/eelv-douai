import React, { useState } from "react";
import { useRouter } from "next/router";
import { useScrollPosition } from "../hooks/useScrollPosition";
import Link from "./link";
import {
  CSS_BREAKPOINT_END_L,
  CSS_BREAKPOINT_END_M,
  CSS_BREAKPOINT_START_L,
  CSS_BREAKPOINT_START_XL,
} from "../utils/constants";

const Nav = () => {
  const scrollPosition = useScrollPosition();
  const [collapsed, setCollapsed] = useState(true);
  const router = useRouter();
  const fixed = scrollPosition && scrollPosition.y !== 0;

  return (
    <nav className="nav">
      <button onClick={() => setCollapsed(!collapsed)}>
        <span>{collapsed ? "🔽" : "🔼"} Menu</span>
      </button>
      <ul>
        <li>
          <Link legacyBehavior href="/">
            <a className={router.pathname === "/" ? "selected" : ""}>Accueil</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/a_propos">
            <a className={router.pathname === "/a_propos" ? "selected" : ""}>
              Présentation
            </a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/actualite">
            <a className={router.pathname === "/actualite" ? "selected" : ""}>
              Actualités
            </a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/ressources">
            <a className={router.pathname === "/ressources" ? "selected" : ""}>
              Ressources
            </a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/contact">
            <a className={router.pathname === "/contact" ? "selected" : ""}>
              Contact
            </a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        nav {
          background: var(--secondary);
          color: var(--light);
          font-size: var(--mediumFontSize);
          z-index: 999;
        }
        nav:hover {
          opacity: 1;
        }
        nav button {
          display: none;
          border: none;
        }
        nav ul {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0;
          padding: 0;
        }
        nav ul li {
          list-style-type: none;
          border-bottom: var(--border) dotted var(--darkBorderColor);
        }
        nav ul li:last-child {
          border-bottom: 0;
        }
        nav ul li a {
          border: var(--border) solid var(--secondary);
          background: var(--secondary);
          display: block;
          padding: 0 var(--gutter);
          text-decoration: none;
          color: var(--light);
          cursor: pointer;
          outline: none;
          transition: background-color var(--baseAnimationRate),
            color var(--baseAnimationRate);
          line-height: ${`calc(var(--mediumLineHeight) * 2)`};
        }
        nav ul li a.selected {
          background: var(--darkActionSelectedColor);
          color: var(--lighterTextColor);
          outline: none;
        }
        nav ul li a:hover,
        nav ul li a:focus {
          background: var(--darkActionHoverColor);
          color: var(--lighterTextColor);
          outline: none;
        }
        @media screen and (max-width: ${CSS_BREAKPOINT_END_M}) {
          nav ul {
            display: ${collapsed ? "none" : "flex"};
          }
          nav button {
            background: var(--secondary);
            display: block;
            width: 100%;
            appearance: none;
            padding: 0 var(--gutter);
            text-decoration: none;
            color: var(--light);
            cursor: pointer;
            outline: none;
            transition: background-color var(--baseAnimationRate),
              color var(--baseAnimationRate);
            line-height: ${`calc(var(--mediumLineHeight) * 2)`};
            border-bottom: ${collapsed
              ? "none"
              : `var(--border) dotted var(--darkBorderColor)`};
          }
        }
        @media screen and (min-width: ${CSS_BREAKPOINT_START_L}) and (max-width: ${CSS_BREAKPOINT_END_L}) {
          nav ul {
            display: "flex";
            width: ${CSS_BREAKPOINT_START_L};
          }
        }
        @media screen and (min-width: ${CSS_BREAKPOINT_START_XL}) {
          nav ul {
            width: ${CSS_BREAKPOINT_START_XL};
          }
        }
        @media screen and (min-width: ${CSS_BREAKPOINT_START_L}) {
          nav {
            justify-content: center;
            ${fixed
              ? `
            position: fixed;
            top: 0;
            width: 100%;
            opacity: 0.9;`
              : ""}
          }
          nav ul {
            display: flex;
            flex-direction: row;
            margin: 0 auto;
            padding: 0;
            background: var(--secondary);
          }
          nav ul li {
            list-style-type: none;
            font-size: var(--mediumFontSize);
            color: var(--light);
            border-bottom: 0;
          }
          nav ul li a {
            border: var(--border) solid var(--secondary);
            background: var(--secondary);
            display: block;
            padding: 0 var(--gutter);
            height: ${`calc(var(--vRythm) * 2)`};
            line-height: ${`calc(var(--vRythm) * 2)`};
            text-decoration: none;
            color: var(--light);
            cursor: pointer;
            outline: none;
            transition: background-color var(--baseAnimationRate),
              color var(--baseAnimationRate);
          }
          nav ul li a:hover,
          nav ul li a:focus {
            background: var(--darkActionHoverColor);
            color: var(--lighterTextColor);
            outline: none;
          }
          nav ul li:first-child a {
            border: none;
            border-radius: var(--borderRadius) 0 0 var(--borderRadius);
          }
          nav ul li:last-child a {
            border: none;
            border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
          }
          nav ul li:not(:first-child) a {
            border-left: var(--border) solid var(--darkActionHoverColor);
          }
        }
      `}</style>
    </nav>
  );
};

export default Nav;
