import styles from "./code.module.scss";
import type { HTMLAttributes } from "react";

const Code = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
} & HTMLAttributes<HTMLElement>) => (
  <code className={styles.root + (className ? " " + className : "")} {...props}>
    {children}
  </code>
);

export default Code;
