import { join as pathJoin } from "path";
import Layout from "../../layouts/main";
import ContentBlock from "../../components/contentBlock";
import Heading1 from "../../components/h1";
import Paragraph from "../../components/p";
import Anchor from "../../components/a";
import { readEntries } from "../../utils/frontmatter";
import { toASCIIString } from "../../utils/ascii";
import { readParams } from "../../utils/params";
import { parseMarkdown } from "../../utils/markdown";
import { datedItemsSorter } from "../../utils/items";
import Tribunes from "../../components/tribunes";
import type { Entry, Metadata } from "../../components/tribunes";
import type { FrontMatterResult } from "front-matter";
import type { MarkdownRootNode } from "../../utils/markdown";
import type { GetStaticProps } from "next";
import type { BuildQueryParamsType } from "../../utils/params";

export type BaseProps = {
  title: string;
  description: string;
  entries: Entry[];
  pagesCount: number;
};
export type Props = BaseProps & {
  page: number;
};

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
    <ContentBlock className="title">
      <Heading1 className="title">Tribunes des élu⋅es</Heading1>
      <Paragraph>
        Retrouvez les tribunes rédigées par les écologistes élues dans les
        différentes instances locales.
      </Paragraph>

      <Tribunes entries={entries} base={"/tribunes/"} />

      <nav className="pagination">
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

export const entriesToBaseProps = (
  baseEntries: FrontMatterResult<Metadata>[]
): BaseProps => {
  const title = `Tribunes des élu⋅es`;
  const description = "Découvrez les tribunes des élu⋅es EÉLV du Douaisis.";
  const entries = baseEntries
    .map<Entry>((entry) => ({
      ...entry.attributes,
      id: toASCIIString(
        `${entry.attributes.publication}-${new Date(
          entry.attributes.date
        ).getFullYear()}-${new Date(entry.attributes.date).getMonth() + 1}`
      ),
      content: parseMarkdown(entry.body) as MarkdownRootNode,
    }))
    .sort(datedItemsSorter);

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
  const baseProps = entriesToBaseProps(
    await readEntries<Metadata>(pathJoin(".", "contents", "tribunes"))
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
    } as Props,
  };
};

export default BlogEntries;
