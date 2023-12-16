import styles from "./anchored.module.scss";
import Link from "next/link";

const Anchored = ({
  children,
  id = "",
}: {
  children: React.ReactNode;
  id?: string;
}) => {
  return (
    <span className={styles.root}>
      {children}{" "}
      <small>
        <Link
          href={`#${id}`}
          className={styles.icon}
          id={id}
          title="Lien vers cette section"
        >
          <span>🔗</span>
        </Link>
      </small>
    </span>
  );
};

export default Anchored;
