import styles from "./h6.module.scss";
import type { HTMLAttributes } from "react";

const Heading6 = ({
  children,
  className,
  ...props
}: { children: React.ReactNode } & HTMLAttributes<HTMLElement>) => (
  <h6 className={styles.root + (className ? " " + className : "")} {...props}>
    {children}
  </h6>
);

export default Heading6;
