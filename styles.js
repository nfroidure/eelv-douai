import css from 'styled-jsx/css';
import Color from 'color';
import reduceCSSCalc from 'reduce-css-calc';

// Color Set
// https://coolors.co/ffd400-004319-7eb712-ececec-999999

const yellow = 'ffd400';
const green = '004319';
export const green2 = '7eb712';
const light = 'fcfcfc';
const grey = '999999';
export const dark = '323232';

export const darkTextColor = `#${dark}`;
export const greyTextColor = Color(darkTextColor)
  .grayscale()
  .lighten(95)
  .hex();
export const lightTextColor = `#${light}`;
export const lighterTextColor = Color(lightTextColor)
  .grayscale()
  .lighten(95)
  .hex();
export const lightBackground = `#${light}`;
export const greyBackground = Color(lightBackground)
.grayscale()
.darken(0.03)
.hex();
export const greyerBackground = Color(lightBackground)
.grayscale()
.darken(0.05)
.hex();
export const darkBackground = `#${green2}`;
export const darkActionColor = `#${green2}`;
export const darkActionHoverColor = Color(darkActionColor)
  .whiten(0.9)
  .hex();
export const darkActionSelectedColor = Color(darkActionColor)
  .darken(0.05)
  .hex();
export const lightBorderColor = Color(darkActionColor)
  .grayscale()
  .whiten(0.7)
  .hex();
export const darkBorderColor = Color(`#${green}`)
  .whiten(0.3)
  .hex();
export const linkColor = `#${green}`;
export const linkHoverColor = Color(linkColor)
  .whiten(1.5)
  .hex();
export const neutralColor = Color(darkBackground)
  .grayscale()
  .hex();
export const validColor = 'green';
export const errorColor = 'red';
export const focusColor = `#${green}`;

// Transitions
export const baseAnimationRate = '0.3s';

// Layout
// Not using rem due to a bug in Safari :/
// https://zellwk.com/blog/media-query-units/
export const column = '4rem';
export const gutter = '1.6rem';
export const block = reduceCSSCalc(`calc(${column} * 3 + ${gutter} * 2)`);
export const midGutter = reduceCSSCalc(`calc(${gutter} / 1)`);
export const vRythm = '2.4rem';
export const border = '0.125rem';

// RWD
export const rwdEpsilon = '0.00001rem';
export const startS = '0rem';
export const startM = reduceCSSCalc(`calc(${block} * 2 + ${gutter} * 5)`);
export const startL = reduceCSSCalc(`calc(${block} * 3 + ${gutter} * 6)`);
export const startXL = reduceCSSCalc(`calc(${block} * 4 + ${gutter} * 7)`);

export const endS = reduceCSSCalc(`calc(${startM} - ${rwdEpsilon})`);
export const endM = reduceCSSCalc(`calc(${startL} - ${rwdEpsilon})`);
export const endL = reduceCSSCalc(`calc(${startXL} - ${rwdEpsilon})`);

// Font sizes
export const formFontSize = '1.1rem';
export const formLineHeight = '1.3rem';
export const formRowHeight = reduceCSSCalc(`calc(${vRythm} * 2)`);
export const baseFontSize = '1.5rem';
export const baseLineHeight = vRythm;

// Design
export const borderRadius = '0.3rem';

// Layout compnonents
export const lightAsideBox = css`
h2 {
  padding: 0;
  padding: 0 0 ${vRythm} 0;
}
.aside {
  padding: ${vRythm} ${gutter};
  background: ${greyerBackground};
  color: ${darkTextColor};
  border-radius: ${borderRadius};
}
`;

// Templates
export const lightTextContent = css`
  .content {
    color: ${darkTextColor};
    background: ${lightBackground};
  }
  a,
  a:visited {
    color: ${linkColor};
  }
  a:hover,
  a:focus {
    color: ${linkHoverColor};
  }
  p,
  ul,
  ol,
  address {
    margin: 0 0 ${vRythm} 0;
  }
  blockquote {
    margin: 0 0 ${vRythm} 0;
    padding: 0 0 0 ${gutter};
    border-left: ${border} solid #${green2};
  }
  hr {
    border-bottom: ${border} solid #${green2};
    margin: 0 0 ${vRythm} 0;
  }
  h1 {
    font-size: ${reduceCSSCalc(`calc(${baseFontSize} * 1.6)`)};
    line-height: ${reduceCSSCalc(`calc(${baseLineHeight} * 2)`)};
    font-weigth: bold;
    margin: 0 0 ${vRythm} 0;
  }
  h2 {
    font-size: ${reduceCSSCalc(`calc(${baseFontSize} * 1.2)`)};
    line-height: ${reduceCSSCalc(`calc(${baseLineHeight} * 1)`)};
    font-weigth: normal;
    margin: ${vRythm} 0 0 0;
  }
  h3 {
    font-size: ${baseFontSize};
    line-height: ${baseLineHeight};
    text-decoration: underline;
    font-weigth: normal;
    margin: ${vRythm} 0 0 0;
  }
  img, iframe {
    max-width: 100%;
  }
  iframe {
    border:none;
    overflow:hidden;
    width: 100%;
    height: ${reduceCSSCalc(`calc(${vRythm} * 16)`)};
    max-width: 100%;
  }
  div.card {
    background: ${greyerBackground};
    border-radius: ${borderRadius};
    padding: ${vRythm} ${gutter} ${vRythm} ${gutter};
    margin: 0 0 ${vRythm} 0;
  }
  div.card h3 {
    margin: 0;
  }
  div.card a.button {
    padding: 0 ${gutter};
  }
  @media screen and (max-width: ${endM}) {
    h1 span, h2 span {
      content: ' ';
      clear: right;
      display: block;
    }
    h1 a.button, h2 a.button {
      padding: 0 ${gutter};
    }
  }
  @media screen and (min-width: ${startL}) {
    div.sided img {
      float: left;
      width: ${reduceCSSCalc(`calc(${block} * 2 + ${gutter})`)};
      margin-right: ${gutter};
    }
    h1 a.button, h2 a.button {
      float: right;
      padding: 0 ${gutter};
    }
    h1::after, h2::after {
      content: "";
      clear: both;
      display: block;
    }
    address,
    blockquote {
      margin: 0 0 ${vRythm} ${gutter};
    }
  }
`;

export const lightTableContent = css`
  div.table-container {
    overflow-x: auto;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }

  table,
  th,
  td {
    border-bottom: 1px solid #ddd;
    padding: 0 ${gutter};
  }

  tbody tr:hover {background-color: ${greyerBackground};}
  tbody tr:not(:hover):nth-child(even) {background-color: ${greyBackground};}

  th {
    line-height: ${reduceCSSCalc(`calc(${vRythm} * 2)`)};
    text-align: left;
    text-transform: uppercase;
    vertical-align: bottom;
  }

  td {
    line-height: ${reduceCSSCalc(`calc(${vRythm} * 2)`)};
  }
`;