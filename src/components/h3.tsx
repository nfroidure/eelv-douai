import styles from "./h3.module.scss";
import type { HTMLAttributes } from "react";

const Heading3 = ({
  children,
  className,
  ...props
}: { children: React.ReactNode } & HTMLAttributes<HTMLElement>) => (
  <h3 className={styles.root + (className ? " " + className : "")} {...props}>
    {children}
  </h3>
);

export default Heading3;
