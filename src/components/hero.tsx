"use client";

import styles from "./hero.module.scss";
import { useScrollPosition } from "../hooks/useScrollPosition";

export default function Hero({
  backgroundImage = "",
}: {
  backgroundImage?: string;
}) {
  const scrollPosition = useScrollPosition([backgroundImage]);
  const visible =
    backgroundImage && (!scrollPosition || scrollPosition.y === 0);

  return (
    <div
      className={[styles.hero, ...(visible ? [styles.visible] : [])].join(" ")}
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    ></div>
  );
}
