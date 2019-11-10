import React, { useState } from "react";
import reduceCSSCalc from "reduce-css-calc";
import { baseLineHeight, gutter, greyerBackground, vRythm, endM } from "../styles";

export default ({ illustrations }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="root">
      <p>
        <img
          src={illustrations[selectedIndex].href}
          alt={illustrations[selectedIndex].alt || ""}
        />
      </p>
      <ul>
        {illustrations.map((illustration, index) => (
          <li key={index}>
            <a onClick={setSelectedIndex.bind(null, index)}>
            <img src={illustration.href} alt={illustration.alt || ""} />
            </a>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .root {
          background: ${greyerBackground};
        }
        p {
          text-align: center;
          margin: 0;
          padding: ${gutter} ${vRythm};
        }
        p img {
          height: ${reduceCSSCalc(`calc(${baseLineHeight} * 16)`)};
          max-width: 100%;
        }
        ul {
          display: flex;
          justify-content: center;
          margin: 0 0 ${vRythm} 0;
          padding: 0 ${gutter} ${vRythm} ${gutter};
          overflow: hidden;
        }
        ul li {
          display: block;
          list-style-type: none;
          margin: 0;
        }
        ul li:not(:first-child) {
          margin: 0 0 0 ${gutter};
        }
        ul li img {
          display: block;
          list-style-type: none;
          height: ${reduceCSSCalc(`calc(${baseLineHeight} * 2)`)};
          cursor: pointer;
        }
        @media screen and (max-width: ${endM}) {
          .root {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
