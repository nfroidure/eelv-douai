import styles from "./em.module.scss";
import type { HTMLAttributes } from "react";

const Emphasis = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
} & HTMLAttributes<HTMLElement>) => (
  <em className={styles.root + (className ? " " + className : "")} {...props}>
    {children}
  </em>
);

export default Emphasis;
