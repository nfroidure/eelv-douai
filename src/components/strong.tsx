import styles from "./strong.module.scss";
import type { HTMLAttributes } from "react";

const Strong = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
} & HTMLAttributes<HTMLElement>) => (
  <strong
    className={styles.root + (className ? " " + className : "")}
    {...props}
  >
    {children}
  </strong>
);

export default Strong;
