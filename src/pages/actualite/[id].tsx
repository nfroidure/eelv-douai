import { entriesToBaseListingMetadata } from "./index";
import { readEntries } from "../../utils/frontmatter";
import { fixText } from "../../utils/text";
import { pathJoin } from "../../utils/files";
import { datedPagesSorter } from "../../utils/contents";
import { renderMarkdown } from "../../utils/markdown";
import Layout from "../../layouts/main";
import ContentBlock from "../../components/contentBlock";
import Paragraph from "../../components/p";
import type { News, NewsFrontmatterMetadata } from "../../utils/news";
import type { GetStaticProps, GetStaticPaths } from "next";

type Params = { id: string };
type Props = {
  entry: News;
  linkedEntries: News[];
};

const BlogPost = ({ entry }: Props) => {
  return (
    <Layout
      title={`${fixText(entry.title)}`}
      description={fixText(entry.description)}
      image={"/" + entry.illustration?.url}
    >
      <ContentBlock>
        {renderMarkdown({ index: 0 }, entry.content)}
        <Paragraph>
          Publié le {new Date(entry.date).toLocaleString()}.
        </Paragraph>
      </ContentBlock>
      <style>{`
      @media print {
        aside {
          display: none;
        }
      }
      `}</style>
    </Layout>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const baseProps = entriesToBaseListingMetadata(
    await readEntries<NewsFrontmatterMetadata>(pathJoin(".", "contents", "actualite"))
  );

  const paths = baseProps.entries.map((entry) => ({
    params: { id: entry.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const baseProps = entriesToBaseListingMetadata(
    await readEntries<NewsFrontmatterMetadata>(pathJoin(".", "contents", "actualite"))
  );
  const entry = baseProps.entries.find(
    ({ id }) => id === (params || {}).id
  );
  const linkedEntries = baseProps.entries
    .filter(
      (anEntry) =>
        entry.id !== anEntry.id &&
        !anEntry.draft &&
        entry.categories.some((category) =>
          anEntry.categories.some(
            (actualCategory) => category === actualCategory
          )
        )
    )
    .sort(datedPagesSorter);
  const pastEntries = linkedEntries.filter(
    (anEntry) => Date.parse(anEntry.date) < Date.parse(entry.date)
  );
  const recenterEntries = linkedEntries.filter(
    (anEntry) => Date.parse(anEntry.date) > Date.parse(entry.date)
  );

  return {
    props: {
      entry,
      linkedEntries: pastEntries.concat(recenterEntries).slice(0, 3),
    },
  };
};
