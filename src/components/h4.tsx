import styles from "./h4.module.scss";
import type { HTMLAttributes } from "react";

const Heading4 = ({
  children,
  className,
  ...props
}: { children: React.ReactNode } & HTMLAttributes<HTMLElement>) => (
  <h4 className={styles.root + (className ? " " + className : "")} {...props}>
    {children}
  </h4>
);

export default Heading4;
