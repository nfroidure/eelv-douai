import styles from "./cite.module.scss";
import type { HTMLAttributes } from "react";

const Cite = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
} & HTMLAttributes<HTMLElement>) => (
  <cite className={styles.root + (className ? " " + className : "")} {...props}>
    {children}
  </cite>
);

export default Cite;
