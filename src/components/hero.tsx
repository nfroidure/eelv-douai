"use client";

import styles from "./hero.module.scss";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { qualifyPath } from "../utils/markdown";

export default function Hero({
  backgroundImage = "",
  backgroundPositionX = "center",
  backgroundPositionY = "center",
}: {
  backgroundImage?: string;
  backgroundPositionX?: "left" | "center" | "right" | string;
  backgroundPositionY?: "top" | "center" | "bottom" | string;
}) {
  const scrollPosition = useScrollPosition([backgroundImage]);
  const visible =
    backgroundImage && (!scrollPosition || scrollPosition.y === 0);

  return (
    <div
      className={[styles.hero, ...(visible ? [styles.visible] : [])].join(" ")}
      style={{
        backgroundImage: `url("${qualifyPath(backgroundImage)}")`,
        backgroundPositionX: backgroundPositionX,
        backgroundPositionY: backgroundPositionY,
      }}
    ></div>
  );
}
