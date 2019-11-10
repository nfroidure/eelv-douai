import {
  vRythm,
  gutter,
  startL,
  endL,
  startXL,
} from "../styles";
import reduceCSSCalc from 'reduce-css-calc';

export default ({ children }) => (
  <div className="content">
    {children}
    <style jsx>{`
      .content {
        width:100%;
        padding: ${vRythm} ${gutter};
      }
      @media screen and (min-width: ${startL}) and (max-width: ${endL}) {
        .content {
          padding: ${reduceCSSCalc(`calc(${vRythm} * 2)`)}
            ${reduceCSSCalc(`calc(${gutter} * 2)`)};
        }
      }
      @media screen and (min-width: ${startXL}) {
        .content {
          padding: ${reduceCSSCalc(`calc(${vRythm} * 2)`)}
            ${reduceCSSCalc(`calc(${gutter} * 3)`)};
        }
      }
    `}</style>
  </div>
);
