import React, { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { vRythm, startL, baseAnimationRate } from "../styles";
import reduceCSSCalc from "reduce-css-calc";

export default ({ backgroundImage }) => {
  const [visible, setVisible] = useState(!!backgroundImage);

  useScrollPosition(({ prevPos, currPos }) => {
    setVisible(backgroundImage && (!currPos || currPos.y === 0));
  });

  const heroHeight = reduceCSSCalc(`calc(${vRythm} * 14)`);

  return (
    <div className="hero">
      <style jsx>{`
        .hero {
          width: 100%;
          height: ${backgroundImage ? reduceCSSCalc(`calc(${vRythm} * 8)`) : 0};
          ${backgroundImage
            ? `
          background-image: url("${backgroundImage}");`
            : ""}
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          transition-property: height;
          transition-duration: ${baseAnimationRate};
        }
        @media screen and (min-width: ${startL}) {
          .hero {
            height: ${visible ? heroHeight : 0};
          }
        }
      `}</style>
    </div>
  );
};
