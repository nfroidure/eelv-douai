import styles from "./entries.module.scss";
import ContentBlock from "../../components/contentBlock";
import Heading1 from "../../components/h1";
import Paragraph from "../../components/p";
import Anchor from "../../components/a";
import Tribunes from "../../components/tribunes";
import type { Tribune } from "../../utils/tribunes";

export default function TribuneEntries({
  entries,
  page,
  pagesCount,
}: {
  entries: Tribune[];
  page: number;
  pagesCount: number;
}) {
  return (
    <ContentBlock className="title">
      <Heading1 className="title">Tribunes des élu⋅es</Heading1>
      <Paragraph>
        Retrouvez les tribunes rédigées par les écologistes élues dans les
        différentes instances locales.
      </Paragraph>

      <Tribunes entries={entries} base={"/tribunes/"} />

      <nav className={styles.pagination}>
        {page > 1 ? (
          <Anchor
            icon="arrow-left"
            href={page > 2 ? `/tribunes/pages/${page - 1}` : "/tribunes"}
            rel="previous"
          >
            Précédent
          </Anchor>
        ) : null}{" "}
        {page < pagesCount ? (
          <Anchor
            icon="arrow-right"
            iconPosition="last"
            href={`/tribunes/pages/${page + 1}`}
            rel="next"
          >
            Suivant
          </Anchor>
        ) : null}
      </nav>
    </ContentBlock>
  );
}
