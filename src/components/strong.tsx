import type { HTMLAttributes } from "react";

const Strong = ({
  children,
  ...props
}: {
  children: React.ReactNode;
} & HTMLAttributes<HTMLElement>) => (
  <strong className="root" {...props}>
    {children}
    <style jsx>{`
      .root {
        color: var(--dark);
        font-weight: bold;
      }
    `}</style>
  </strong>
);

export default Strong;
