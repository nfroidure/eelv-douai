import styles from "./li.module.scss";

const ListItem = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
} & React.LiHTMLAttributes<HTMLLIElement>) => (
  <li className={styles.root + (className ? " " + className : "")} {...props}>
    {children}
  </li>
);

export default ListItem;
