import { join as pathJoin } from "path";
import Layout from "../../layouts/main";
import ContentBlock from "../../components/contentBlock";
import Heading1 from "../../components/h1";
import Heading2 from "../../components/h2";
import Paragraph from "../../components/p";
import { readEntries } from "../../utils/frontmatter";
import { toASCIIString } from "../../utils/ascii";
import { parseMarkdown, renderMarkdown } from "../../utils/markdown";
import Anchored from "../../components/anchored";
import { fixText } from "../../utils/text";
import type { MarkdownRootNode } from "../../utils/markdown";
import type { GetStaticProps } from "next";

export type Metadata = {
  title: string;
  date: string;
  draft: boolean;
};
export type Entry = {
  id: string;
  content: MarkdownRootNode;
} & Metadata;

type Props = {
  entries: Entry[];
};

const Page = ({ entries }: Props) => (
  <Layout
    title="Questions fréquemment posées"
    description="Découvrez notre liste de questions souvent posées et leurs réponses."
  >
    <ContentBlock>
      <Heading1>Questions fréquemment posées</Heading1>
      <Paragraph>
        Autour de notre militantisme écologiste, des questions reviennent
        fréquemment, parfois sincères d'autres fois pour nous prendre à défaut.
      </Paragraph>
      <Paragraph>
        Afin de gagner du temps, nous avons préparé des réponses posées et
        construites à ces thèmes récurrents afin de vous informer au mieux sur
        notre action et ses fondements.
      </Paragraph>
      {entries.map((entry) => (
        <div key={entry.id}>
          <Heading2>
            <Anchored id={entry.id}>{fixText(entry.title)}</Anchored>
          </Heading2>
          {renderMarkdown({ index: 0 }, entry.content)}
        </div>
      ))}
    </ContentBlock>
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const entries = (
    await readEntries<Metadata>(pathJoin(".", "contents", "faq"))
  )
    .map<Entry>((entry) => ({
      ...entry.attributes,
      id: toASCIIString(entry.attributes.title),
      content: parseMarkdown(entry.body) as MarkdownRootNode,
    }))
    .filter((entry) => !entry.draft || process.env.NODE_ENV === "development")
    .sort(({ date: dateA }: any, { date: dateB }: any) =>
      new Date(dateA).getTime() > new Date(dateB).getTime() ? -1 : 1
    );

  return { props: { entries } as Props };
};

export default Page;
