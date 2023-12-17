import Link from "next/link";

export default function CustomLink({ children, href, ...props }) {
  return (
    <Link href={href || "/"} {...props}>
      {children}
    </Link>
  );
}
