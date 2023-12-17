import { useState, useEffect } from "react";

export const useScrollPosition = (
  deps: Parameters<typeof useEffect>[1] = []
) => {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition({
        x: window.pageXOffset,
        y: window.pageYOffset,
      });
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, deps);

  return scrollPosition;
};
