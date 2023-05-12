import { readEntries } from "../../utils/frontmatter";
import { toASCIIString } from "../../utils/ascii";
import { readParams } from "../../utils/params";
import { parseMarkdown } from "../../utils/markdown";
import { datedPagesSorter } from "../../utils/contents";
import { pathJoin } from "../../utils/files";
import Layout from "../../layouts/main";
import ContentBlock from "../../components/contentBlock";
import Heading1 from "../../components/h1";
import Paragraph from "../../components/p";
import Anchor from "../../components/a";
import Head from "next/head";
import Items from "../../components/items";
import type {
  BasePagingPageMetadata,
  BaseListingPageMetadata,
} from "../../utils/contents";
import type { FrontMatterResult } from "front-matter";
import type { MarkdownRootNode } from "../../utils/markdown";
import type { News, NewsFrontmatterMetadata } from "../../utils/news";
import type { GetStaticProps } from "next";
import type { BuildQueryParamsType } from "../../utils/params";

export type Props = BasePagingPageMetadata<News>;

const PARAMS_DEFINITIONS = {
  page: {
    type: "number",
    mode: "unique",
  },
} as const;

type Params = BuildQueryParamsType<typeof PARAMS_DEFINITIONS>;

const POSTS_PER_PAGE = 10;

const BlogEntries = ({
  title,
  description,
  entries,
  page,
  pagesCount,
}: Props) => (
  <Layout title={title} description={description}>
    <Head>
      <link
        rel="alternate"
        type="application/atom+xml"
        title={`${title} (Atom)`}
        href="/actualite.atom"
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        title={`${title} (RSS)`}
        href="/actualite.rss"
      />
    </Head>
    <ContentBlock className="title">
      <Heading1 className="title">Notre actualité</Heading1>
      <Paragraph>
        Découvrez les dernières actions des écologistes de Douai et du Douaisis.
      </Paragraph>

      <Items entries={entries} base={"/actualite/"} />

      <nav className="pagination">
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
    <style jsx>{`
      .pagination {
        display: flex;
        gap: var(--gutter);
        align-items: center;
        justify-content: center;
        padding: var(--vRythm) 0 0 0;
      }
      @media print {
        .pagination {
          display: none;
        }
      }
    `}</style>
  </Layout>
);

export const entriesToBaseListingMetadata = (
  baseEntries: FrontMatterResult<NewsFrontmatterMetadata>[]
): BaseListingPageMetadata<News> => {
  const title = `Notre actualité`;
  const description =
    "Découvrez les dernières actions des écologistes de Douai et du Douaisis.";
  const entries = baseEntries
    .map<News>((entry) => ({
      ...entry.attributes,
      id: entry.attributes.leafname || toASCIIString(entry.attributes.title),
      content: parseMarkdown(entry.body) as MarkdownRootNode,
    }))
    .filter((entry) => !entry.draft || process.env.NODE_ENV === "development")
    .sort(datedPagesSorter);

  return {
    title,
    description,
    entries,
    pagesCount: Math.ceil(entries.length / POSTS_PER_PAGE),
  };
};

export const getStaticProps: GetStaticProps<Props, { page: string }> = async ({
  params,
}) => {
  const castedParams = readParams(PARAMS_DEFINITIONS, params || {}) as Params;
  const page = castedParams?.page || 1;
  const baseProps = entriesToBaseListingMetadata(
    await readEntries<NewsFrontmatterMetadata>(pathJoin(".", "contents", "actualite"))
  );
  const title = `${baseProps.title}${
    page && page !== 1 ? ` - page ${page}` : ""
  }`;
  const entries = baseProps.entries.slice(
    (page - 1) * POSTS_PER_PAGE,
    (page - 1) * POSTS_PER_PAGE + POSTS_PER_PAGE
  );

  return {
    props: {
      ...baseProps,
      title,
      entries,
      page,
    },
  };
};

export default BlogEntries;
