import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { CSS_BREAKPOINT_START_L } from "../utils/constants";

export default function Hero({ backgroundImage }) {
  const scrollPosition = useScrollPosition([backgroundImage]);
  const visible =
    backgroundImage && (!scrollPosition || scrollPosition.y === 0);

  return (
    <div className={`hero${visible ? " visible" : ""}`}>
      <style jsx>{`
        .hero {
          width: 100%;
          height: 0;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          transition-property: height;
          transition-duration: var(--baseAnimationRate);
        }
        .hero.visible {
          height: calc(var(--vRythm) * 8);
          background-image: url("${backgroundImage}");
        }
        @media screen and (min-width: ${CSS_BREAKPOINT_START_L}) {
          .hero {
            height: 0;
          }
          .hero.visible {
            height: calc(var(--vRythm) * 14);
          }
        }
      `}</style>
    </div>
  );
}
