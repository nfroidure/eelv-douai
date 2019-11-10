import React, { useState } from "react";
import { useRouter } from "next/router";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Link from "../components/link";
import reduceCSSCalc from "reduce-css-calc";
import Color from "color";
import {
  baseFontSize,
  baseLineHeight,
  vRythm,
  darkBackground,
  darkBorderColor,
  lightTextColor,
  gutter,
  borderRadius,
  darkActionColor,
  border,
  baseAnimationRate,
  darkActionHoverColor,
  darkActionSelectedColor,
  lighterTextColor,
  startL,
  endL,
  startXL,
  endM
} from "../styles";

const Nav = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [fixed, setFixed] = useState(false);
  const router = useRouter();

  useScrollPosition(({ prevPos, currPos }) => {
    setFixed(currPos && currPos.y !== 0);
  });

  return (
    <nav className="nav">
      <button onClick={() => setCollapsed(!collapsed)}>
        <span>{collapsed ? "🔽" : "🔼"} Menu</span>
      </button>
      <ul>
        <li>
          <Link href="/">
            <a className={router.pathname === '/' ? 'selected' : ''}>Accueil</a>
          </Link>
        </li>
        <li>
          <Link href="/a_propos">
            <a className={router.pathname === '/a_propos' ? 'selected' : ''}>Présentation</a>
          </Link>
        </li>
        <li>
          <Link href="/actualite">
            <a className={router.pathname === '/actualite' ? 'selected' : ''}>Actualités</a>
          </Link>
        </li>
        <li>
          <Link href="/ressources">
            <a className={router.pathname === '/ressources' ? 'selected' : ''}>Ressources</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={router.pathname === '/contact' ? 'selected' : ''}>Contact</a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        nav {
          background: ${darkBackground};
          color: ${lightTextColor};
          font-size: ${baseFontSize};
        }
        nav:hover {
          opacity: 1;
        }
        nav button {
          display: none;
          border:none;
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
          border-bottom: ${border} dotted ${darkBorderColor};
        }
        nav ul li:last-child {
          border-bottom: 0;
        }
        nav ul li a {
          border: ${border} solid ${darkActionColor};
          background: ${darkActionColor};
          display: block;
          padding: 0 ${gutter};
          text-decoration: none;
          color: ${lightTextColor};
          cursor: pointer;
          outline: none;
          transition: background-color ${baseAnimationRate},
            color ${baseAnimationRate};
          line-height: ${reduceCSSCalc(`calc(${baseLineHeight} * 2)`)};
        }
        nav ul li a.selected {
          background: ${darkActionSelectedColor};
          color: ${lighterTextColor};
          outline: none;
        }
        nav ul li a:hover,
        nav ul li a:focus {
          background: ${darkActionHoverColor};
          color: ${lighterTextColor};
          outline: none;
        }
        @media screen and (max-width: ${endM}) {
          nav ul {
            display: ${collapsed ? "none" : "flex"};
          }
          nav button {
            background: ${darkActionColor};
            display: block;
            width: 100%;
            appearance: none;
            padding: 0 ${gutter};
            text-decoration: none;
            color: ${lightTextColor};
            cursor: pointer;
            outline: none;
            transition: background-color ${baseAnimationRate},
              color ${baseAnimationRate};
            line-height: ${reduceCSSCalc(`calc(${baseLineHeight} * 2)`)};
            border-bottom: ${collapsed
              ? "none"
              : `${border} dotted ${darkBorderColor}`};
          }
        }
        @media screen and (min-width: ${startL}) and (max-width: ${endL}) {
          nav ul {
            display: "flex";
            width: ${startL};
          }
        }
        @media screen and (min-width: ${startXL}) {
          nav ul {
            width: ${startXL};
          }
        }
        @media screen and (min-width: ${startL}) {
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
            background: ${darkActionColor};
          }
          nav ul li {
            list-style-type: none;
            font-size: ${baseFontSize};
            color: ${lightTextColor};
            border-bottom: 0;
          }
          nav ul li a {
            border: ${border} solid ${darkActionColor};
            background: ${darkActionColor};
            display: block;
            padding: 0 ${gutter};
            height: ${reduceCSSCalc(`calc(${vRythm} * 2)`)};
            line-height: ${reduceCSSCalc(`calc(${vRythm} * 2)`)};
            text-decoration: none;
            color: ${lightTextColor};
            cursor: pointer;
            outline: none;
            transition: background-color ${baseAnimationRate},
              color ${baseAnimationRate};
          }
          nav ul li a:hover,
          nav ul li a:focus {
            background: ${darkActionHoverColor};
            color: ${lighterTextColor};
            outline: none;
          }
          nav ul li:first-child a {
            border: none;
            border-radius: ${borderRadius} 0 0 ${borderRadius};
          }
          nav ul li:last-child a {
            border: none;
            border-radius: 0 ${borderRadius} ${borderRadius} 0;
          }
          nav ul li:not(:first-child) a {
            border-left: ${reduceCSSCalc(`calc(${border})`)} solid
              ${Color(darkActionColor)
                .darken(0.1)
                .hex()};
          }
        }
      `}</style>
    </nav>
  );
};

export default Nav;
