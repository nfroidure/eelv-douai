import Link from "next/link";
import { publicRuntimeConfig } from '../lib/config';

export default ({ children, href, ...props }) => (
  <Link href={href || '/'} as={(publicRuntimeConfig.buildPrefix) + href} {...props}>
    {children}
  </Link>
);
