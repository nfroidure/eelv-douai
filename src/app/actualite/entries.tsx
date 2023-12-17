import styles from "./entries.module.scss";
import ContentBlock from "../../components/contentBlock";
import Heading1 from "../../components/h1";
import Paragraph from "../../components/p";
import Anchor from "../../components/a";
import Items from "../../components/items";
import type { News } from "../../utils/news";

export default function Entries({
  entries,
  page,
  pagesCount,
}: {
  entries: News[];
  page: number;
  pagesCount: number;
}) {
  return (
    <ContentBlock>
      <Heading1>Notre actualité</Heading1>
      <Paragraph>
        Découvrez les dernières actions des écologistes de Douai et du Douaisis.
      </Paragraph>

      <Items entries={entries} base={"/actualite/"} />

      <nav className={styles.pagination}>
        {page > 1 ? (
          <Anchor
            icon="arrow-left"
            href={page > 2 ? `/actualite/pages/${page - 1}` : "/actualite"}
            rel="previous"
          >
            Précédent
          </Anchor>
        ) : null}{" "}
        {page < pagesCount ? (
          <Anchor
            icon="arrow-right"
            iconPosition="last"
            href={`/actualite/pages/${page + 1}`}
            rel="next"
          >
            Suivant
          </Anchor>
        ) : null}
      </nav>
    </ContentBlock>
  );
}
