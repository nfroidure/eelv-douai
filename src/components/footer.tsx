import React from "react";
import {
  CSS_BREAKPOINT_END_L,
  CSS_BREAKPOINT_START_L,
  CSS_BREAKPOINT_START_XL,
} from "../utils/constants";
import Link from "./link";

const Footer = () => (
  <footer className="footer">
    <nav>
      <ul>
        <li>
          <Link legacyBehavior href="/mentions_legales">
            <a>Mentions légales</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      .footer {
        background: var(--secondary);
        color: var(--light);
        padding: 0 var(--gutter);
      }
      nav ul {
        display: inline;
        margin: 0;
        padding: 0;
      }
      nav ul li {
        display: inline;
        list-style-type: none;
        line-height: calc(var(--mediumLineHeight) * 2);
      }
      nav ul li a {
        text-decoration: none;
        color: var(--light);
      }
      nav ul li a:hover,
      nav ul li a:focus {
        color: var(--light);
        outline: none;
      }
      nav ul li:not(:last-child) a:after {
        content: " - ";
      }
      @media screen and (min-width: ${CSS_BREAKPOINT_START_L}) and (max-width: ${CSS_BREAKPOINT_END_L}) {
        nav {
          width: calc(${CSS_BREAKPOINT_START_L} - (var(--gutter) * 2));
          margin: 0 auto;
          justify-content: center;
        }
      }
      @media screen and (min-width: ${CSS_BREAKPOINT_START_XL}) {
        nav {
          width: calc(${CSS_BREAKPOINT_START_XL} - (var(--gutter) * 2));
          margin: 0 auto;
          justify-content: center;
        }
      }
    `}</style>
  </footer>
);

export default Footer;
