export default function Aside({ children }) {
  return (
    <aside className="aside">
      {children}
      <style jsx>{`
        h2 {
          padding: 0;
          padding: 0 0 var(--vRythm) 0;
        }
        .aside {
          padding: var(--vRythm) var(--gutter);
          background: var(--lightGrey);
          color: var(--dark);
          border-radius: var(--borderRadius);
        }
      `}</style>
    </aside>
  );
}
