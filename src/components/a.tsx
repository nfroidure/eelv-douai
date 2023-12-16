import Link from "next/link";
import styles from "./a.module.scss";
import type { LinkProps } from "next/link";

const Anchor = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  className,
  icon,
  iconPosition = "first",
  ...props
}: {
  children: React.ReactNode;
} & LinkProps & {
    icon?: string;
    iconPosition?: "first" | "last";
  } & Exclude<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) => (
  <Link
    {...{
      href,
      as,
      replace,
      scroll,
      shallow,
      passHref,
      prefetch,
      locale,
    }}
    className={`${styles.root}${className ? " " + className : ""}${
      icon ? ` ${iconPosition === "first" ? styles.first : styles.last}` : ""
    }`}
    {...props}
    target={href.startsWith("http") ? "_blank" : "_self"}
  >
    {icon ? <span className={styles.root} /> : null}
    {children}
  </Link>
);

export default Anchor;
