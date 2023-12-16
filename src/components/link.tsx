import Link from "next/link";
import { publicRuntimeConfig } from "../utils/config";

export default function CustomLink({ children, href, ...props }) {
  return (
    <Link
      href={href || "/"}
      as={publicRuntimeConfig.basePath + href}
      {...props}
    >
      {children}
    </Link>
  );
}
