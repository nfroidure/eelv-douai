import styles from "./h5.module.scss";
import type { HTMLAttributes } from "react";

const Heading5 = ({
  children,
  className,
  ...props
}: { children: React.ReactNode } & HTMLAttributes<HTMLElement>) => (
  <h5 className={styles.root + (className ? " " + className : "")} {...props}>
    {children}
  </h5>
);

export default Heading5;
