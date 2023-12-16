import styles from "./blockquote.module.scss";

const Blockquote = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
} & React.BlockquoteHTMLAttributes<HTMLElement>) => (
  <blockquote
    className={styles.root + (className ? " " + className : "")}
    {...props}
  >
    {children}
  </blockquote>
);

export default Blockquote;
