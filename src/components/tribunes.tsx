import Heading2 from "./h2";
import Paragraph from "./p";
import Anchor from "./a";
import Img from "./img";
import { MarkdownRootNode, renderMarkdown } from "../utils/markdown";
import { CSS_BREAKPOINT_START_L } from "../utils/constants";
import { toASCIIString } from "../utils/ascii";
import Strong from "./strong";

export type Metadata = {
  author: string;
  date: string;
  role: string;
  publication: string;
};
export type Entry = {
  id: string;
  content: MarkdownRootNode;
} & Metadata;

const Items = <T extends Entry>({
  entries,
  base,
}: {
  entries: T[];
  base: string;
}) => {
  return (
    <div className="entries">
      {entries.map((entry) => (
        <div className="entry_item" key={entry.id}>
          <p className="entry_illustration">
            <Anchor href={`${base}${entry.id}`}>
              <Img
                float="left"
                orientation="portrait"
                src={`/images/elu-es/${toASCIIString(
                  entry.author.toLowerCase()
                ).replace(/[^\w]/gim, "-")}.jpg`}
                alt={`Photographie de ${entry.author}`}
              />
            </Anchor>
          </p>
          <Heading2 className="entry_title">
            <Anchor href={`${base}${entry.id}`} className="no_underline">
              {entry.author}
            </Anchor>
          </Heading2>
          <Paragraph><Strong>{entry.role}</Strong></Paragraph>
          {renderMarkdown({ index: 0 }, entry.content)}
          <Paragraph>
            Publié dans {entry.publication} le{" "}
            {new Date(entry.date).toLocaleString()}.
          </Paragraph>
          <div className="clear"></div>
        </div>
      ))}

      <style jsx>
        {`
          :global(.entry_title) {
            margin-top: 0 !important;
          }
          :global(.entry_title a) {
            text-decoration: none !important;
          }
          :global(.entry_illustration) {
            margin: 0 !important;
          }
          .entry_item {
            padding: var(--vRythm) 0;
            border-bottom: var(--border) solid var(--secondary);
          }
          .entry_item:first-child {
            padding: 0 0 var(--vRythm) 0;
          }
          .entry_item:last-child {
            border: none;
            padding: var(--vRythm) 0 0 0;
          }

          @media screen and (min-width: ${CSS_BREAKPOINT_START_L}) {
            .clear {
              clear: left;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Items;
