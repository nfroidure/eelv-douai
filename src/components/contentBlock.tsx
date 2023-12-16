import styles from "./contentBlock.module.scss";

export default function ContentBlock({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <section className={styles.root + (className ? " " + className : "")}>
      {children}
    </section>
  );
}
