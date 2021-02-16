import React, { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Link from "../components/link";
import reduceCSSCalc from "reduce-css-calc";
import { publicRuntimeConfig } from "../lib/config";
import { NAME } from "../constants";
import {
  baseFontSize,
  vRythm,
  lightBackground,
  gutter,
  baseAnimationRate,
  darkTextColor,
  startL,
} from "../styles";

const Header = () => {
  const [visible, setVisible] = useState(true);

  useScrollPosition(({ prevPos, currPos }) => {
    setVisible(!currPos || currPos.y === 0);
  });

  const headerHeight = reduceCSSCalc(`calc(${vRythm} * 5)`);
  reduceCSSCalc(`calc(${vRythm} * 5)`);

  return (
    <header className="header">
      <h1 className="logo">
        <Link href="/">
          <a>
            <img src={publicRuntimeConfig.buildPrefix + "/images/Logo - EELV Douaisis.svg"} alt={NAME} />
          </a>
        </Link>
      </h1>

      <style jsx>{`
        .header {
          height: ${headerHeight};
          background: ${lightBackground};
          color: ${darkTextColor};
          padding: 0 ${gutter};
          text-align: center;
          transition-property: height;
          transition-duration: ${baseAnimationRate};
          overflow: hidden;
        }
        h1.logo {
          display: inline-block;
          font-size: ${baseFontSize};
          line-height: ${vRythm};
          background: ${lightBackground};
        }
        h1.logo a {
          text-decoration: none;
        }
        h1.logo img {
          height: ${reduceCSSCalc(`calc(${vRythm} * 5)`)};
        }
        @media screen and (min-width: ${startL}) {
          .header {
            height: ${visible ? headerHeight : 0};
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
