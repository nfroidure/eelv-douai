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
    <style jsx>{`
      .root > :global(:first-child:last-child) {
        margin: 0;
      }
    `}</style>
  </li>
);

export default ListItem;
