import React from "react";
import Link from "../components/link";
import reduceCSSCalc from 'reduce-css-calc';
import {
  lightTextColor,
  gutter,
  darkBackground,
  startL,
  endL,
  startXL,
  baseLineHeight,
  vRythm
} from "../styles";

const Footer = () => (
  <footer className="footer">
    <nav>
        <ul>
            <li><Link href="/mentions_legales"><a>Mentions légales</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
    </nav>
    <style jsx>{`
      .footer {
        background: ${darkBackground};
        color: ${lightTextColor};
        padding: 0 ${gutter};
      }
      nav ul {
        display: inline;
        margin: 0;
        padding: 0;
      }
      nav ul li {
        display: inline;
        list-style-type: none;
        line-height: ${reduceCSSCalc(`calc(${baseLineHeight} * 2)`)};
      }
      nav ul li a {
        text-decoration: none;
        color: ${lightTextColor};
      }
      nav ul li a:hover,
      nav ul li a:focus {
        color: ${lightTextColor};
        outline: none;
      }
      nav ul li:not(:last-child) a:after {
        content: ' - ';
      }
      @media screen and (min-width: ${startL}) and (max-width: ${endL}) {
        nav {
          width: ${reduceCSSCalc(`calc(${startL} - (${gutter} * 2))`)};
          margin: 0 auto;
          justify-content: center;
        }
      }
      @media screen and (min-width: ${startXL}) {
        nav {
          width: ${reduceCSSCalc(`calc(${startXL} - (${gutter} * 2))`)};
          margin: 0 auto;
          justify-content: center;
        }
      }
    `}</style>
  </footer>
);

export default Footer;
