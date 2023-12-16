import styles from "./_gridSystem.module.scss";
import { createContext } from "react";

export const DEFAULT_GRID_H = 0.55 * 16;
export const DEFAULT_GRID_V = 0.1875 * 16;

export const GridContext = createContext({
  h: DEFAULT_GRID_H,
  v: DEFAULT_GRID_V,
});

export function GridSystem(): JSX.Element {
  return (
    <div className={styles.grid} id="gridSystem">
      <div className={styles.vGrid} id="vGridSystem">
        {new Array(30).fill("").map((_, index) => {
          return [
            <div key={`g${index}`} className={styles.gutter}></div>,
            <div key={`c${index}`} className={styles.column}></div>,
          ];
        })}
      </div>
      <div className={styles.hGrid} id="hGridSystem">
        {new Array(100).fill("").map((_, index) => {
          return [<div key={`${index}`} className={styles.row}></div>];
        })}
      </div>
    </div>
  );
}
