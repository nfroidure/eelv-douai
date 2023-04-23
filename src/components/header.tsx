import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import Link from "./link";
import { publicRuntimeConfig } from "../utils/config";
import { CSS_BREAKPOINT_START_L, NAME } from "../utils/constants";

const Header = () => {
  const scrollPosition = useScrollPosition();
  const visible = !scrollPosition || scrollPosition.y === 0;

  return (
    <header className={`header${visible ? ' visible' : ''}`}>
      <h1 className="logo">
        <Link legacyBehavior href="/">
          <a>
            <img src={publicRuntimeConfig.buildPrefix + "/images/Logo - EELV Douaisis.svg"} alt={NAME} />
          </a>
        </Link>
      </h1>

      <style jsx>{`
        .header {
          height: calc(var(--vRythm) * 5);
          background: var(--light);
          color: var(--dark);
          padding: 0 var(--gutter);
          text-align: center;
          transition-property: height;
          transition-duration: var(--baseAnimationRate);
          overflow: hidden;
        }
        h1.logo {
          display: inline-block;
          font-size: var(--mediumFontSize);
          line-height: var(--vRythm);
          background: var(--light);
        }
        h1.logo a {
          text-decoration: none;
        }
        h1.logo img {
          height: calc(var(--vRythm) * 5);
        }
        @media screen and (min-width: ${CSS_BREAKPOINT_START_L}) {
          .header {
            height: 0;
          }
          .header.visible {
            height: calc(var(--vRythm) * 5);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
