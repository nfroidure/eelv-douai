import styles from "./hr.module.scss";
import type { HTMLAttributes } from "react";

const HorizontalRule = ({
  className,
  ...props
}: HTMLAttributes<HTMLHRElement>) => (
  <>
    <hr
      className={styles.root + (className ? " " + className : "")}
      {...props}
    />
  </>
);

export default HorizontalRule;
