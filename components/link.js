import Link from "next/link";
import { publicRuntimeConfig } from "../lib/config";

export default function CustomLink({ children, href, ...props }) {
  return (
    <Link
      href={href || "/"}
      as={publicRuntimeConfig.buildPrefix + href}
      {...props}
    >
      {children}
    </Link>
  );
}
