import {
  CSS_BREAKPOINT_END_S,
  CSS_BREAKPOINT_START_M,
  CSS_BREAKPOINT_END_M,
  CSS_BREAKPOINT_START_L,
  CSS_BREAKPOINT_END_L,
  CSS_BREAKPOINT_START_XL,
} from "../utils/constants";

export default function MainContent({ children }) {
  return (
    <main className="content">
      {children}
      <style jsx>{`
        .content {
          flex: 1;
          display: flex;
          width: 100%;
          padding: var(--vRythm) var(--gutter);
        }
        @media screen and (max-width: ${CSS_BREAKPOINT_END_S}) {
          .content {
            justify-content: flex-start;
          }
        }
        @media screen and (min-width: ${CSS_BREAKPOINT_START_M}) and (max-width: ${CSS_BREAKPOINT_END_M}) {
          .content {
            padding: 0 var(--gutter);
            justify-content: center;
          }
        }
        @media screen and (min-width: ${CSS_BREAKPOINT_START_L}) and (max-width: ${CSS_BREAKPOINT_END_L}) {
          .content {
            width: ${CSS_BREAKPOINT_START_L};
            margin: 0 auto;
            padding: calc(var(--vRythm) * 2) calc(var(gutter) * 2);
          }
        }
        @media screen and (min-width: ${CSS_BREAKPOINT_START_XL}) {
          .content {
            width: ${CSS_BREAKPOINT_START_XL};
            margin: 0 auto;
            padding: calc(var(--vRythm) * 2) calc(var(gutter) * 3);
          }
        }
      `}</style>
    </main>
  );
}
