import styles from "./ul.module.scss";
import type { HTMLAttributes } from "react";

const UnorderedList = ({
  children,
  className,
  ...props
}: { children: React.ReactNode } & HTMLAttributes<HTMLUListElement>) => (
  <ul className={styles.ul + (className ? " " + className : "")} {...props}>
    {children}
  </ul>
);

export default UnorderedList;
