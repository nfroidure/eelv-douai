import styles from "./hr.module.scss";
import { Fragment, type HTMLAttributes } from "react";

export default function HorizontalRule({
  className,
  ...props
}: HTMLAttributes<HTMLHRElement>) {
  return (
    <Fragment>
      <hr
        className={styles.root + (className ? " " + className : "")}
        {...props}
      />
    </Fragment>
  );
}
