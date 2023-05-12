import { pathJoin } from "../../utils/files";
import { readEntries } from "../../utils/frontmatter";
import { toASCIIString } from "../../utils/ascii";
import { parseMarkdown, renderMarkdown } from "../../utils/markdown";
import { fixText } from "../../utils/text";
import { datedPagesSorter } from "../../utils/contents";
import Layout from "../../layouts/main";
import ContentBlock from "../../components/contentBlock";
import Heading1 from "../../components/h1";
import Heading2 from "../../components/h2";
import Paragraph from "../../components/p";
import Anchored from "../../components/anchored";
import type { MarkdownRootNode } from "../../utils/markdown";
import type { GetStaticProps } from "next";

export type FAQItemFrontmatterMetadata = {
  title: string;
  date: string;
  draft: boolean;
};
export type FAQItem = {
  id: string;
  content: MarkdownRootNode;
} & FAQItemFrontmatterMetadata;

type Props = {
  entries: FAQItem[];
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
    await readEntries<FAQItemFrontmatterMetadata>(pathJoin(".", "contents", "faq"))
  )
    .map((entry) => ({
      ...entry.attributes,
      id: toASCIIString(entry.attributes.title),
      content: parseMarkdown(entry.body) as MarkdownRootNode,
    }))
    .filter((entry) => !entry.draft || process.env.NODE_ENV === "development")
    .sort(datedPagesSorter);

  return { props: { entries } };
};

export default Page;
