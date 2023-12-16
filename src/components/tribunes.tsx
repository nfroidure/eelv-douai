import styles from "./tribunes.module.scss";
import Heading2 from "./h2";
import Paragraph from "./p";
import Anchor from "./a";
import Img from "./img";
import { MarkdownRootNode, renderMarkdown } from "../utils/markdown";
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
    <div className={styles.entries}>
      {entries.map((entry) => (
        <div className={styles.entry_item} key={entry.id}>
          <p className={styles.entry_illustration}>
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
          <Heading2 className={styles.entry_title}>
            <Anchor href={`${base}${entry.id}`} className={styles.no_underline}>
              {entry.author}
            </Anchor>
          </Heading2>
          <Paragraph>
            <Strong>{entry.role}</Strong>
          </Paragraph>
          {renderMarkdown({ index: 0 }, entry.content)}
          <Paragraph>
            Publié dans {entry.publication} le{" "}
            {new Date(entry.date).toLocaleString()}.
          </Paragraph>
          <div className={styles.clear}></div>
        </div>
      ))}
    </div>
  );
};

export default Items;
