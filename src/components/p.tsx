import styles from "./p.module.scss";
import type { HTMLAttributes } from "react";

const Paragraph = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
} & HTMLAttributes<HTMLParagraphElement>) => (
  <p className={styles.root + (className ? " " + className : "")} {...props}>
    {children}
  </p>
);

export default Paragraph;
