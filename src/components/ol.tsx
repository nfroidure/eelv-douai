import styles from "./ol.module.scss";

const OrderedList = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
} & React.OlHTMLAttributes<HTMLOListElement>) => (
  <ol className={styles.root + (className ? " " + className : "")} {...props}>
    {children}
  </ol>
);

export default OrderedList;
