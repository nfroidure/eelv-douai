"use client";

import styles from "./gallery.module.scss";
import { useState } from "react";
import type { MarkdownImageNode } from "../utils/markdown";

const Gallery = ({ imagesNodes }: { imagesNodes: MarkdownImageNode[] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={styles.root}>
      <p>
        <img
          src={
            imagesNodes[selectedIndex].url.startsWith("http")
              ? imagesNodes[selectedIndex].url
              : "/" + imagesNodes[selectedIndex].url
          }
          alt={imagesNodes[selectedIndex].alt || ""}
        />
      </p>
      <ul>
        {imagesNodes.map((imageNode, index) => (
          <li key={index}>
            <a onClick={setSelectedIndex.bind(null, index)}>
              <img
                src={
                  imageNode.url.startsWith("http")
                    ? imageNode.url
                    : "/" + imageNode.url
                }
                alt={imageNode.alt || ""}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
