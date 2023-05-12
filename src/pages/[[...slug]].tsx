import { fixText } from "../utils/text";
import { parseMarkdown, renderMarkdown } from "../utils/markdown";
import { readEntry } from "../utils/frontmatter";
import { pathJoin, readDirDeep } from "../utils/files";
import { toASCIIString } from "../utils/ascii";
import Layout from "../layouts/main";
import ContentBlock from "../components/contentBlock";
import type { GetStaticProps, GetStaticPaths } from "next";
import type { MarkdownRootNode } from "../utils/markdown";

type PageFrontmatterMetadata = {
  date: string;
  title: string;
  description: string;
  author: string;
  illustration?: {
    href: string;
    alt: string;
  };
};
type Entry = {
  id: string;
  content: MarkdownRootNode;
} & PageFrontmatterMetadata;

type Params = { slug: string[] };
type Props = { entry: Entry };

const Page = ({ entry }: Props) => {
  return (
    <Layout
      title={`${fixText(entry.title)}`}
      description={fixText(entry.description)}
      image={entry.illustration?.href}
    >
      <ContentBlock>
        {renderMarkdown({ index: 0 }, entry.content)}
        <div className="clear"></div>
      </ContentBlock>
      <style jsx>{`
        .clear {
          clear: both;
        }
      `}</style>
    </Layout>
  );
};

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  const base = pathJoin(".", "contents", "pages");
  const paths = (await readDirDeep(`${base}/**/*.md`)).map((path) => {
    const slug = path
      .replace(base + "/", "")
      .replace(".md", "")
      .split("/");

    if (slug[slug.length - 1] === "index") {
      slug.pop();
    }

    return {
      params: { slug },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const path = pathJoin("contents", "pages", ...(params.slug || []));
  let result;

  try {
    result = await readEntry<PageFrontmatterMetadata>(path + ".md");
  } catch (err) {
    result = await readEntry<PageFrontmatterMetadata>(path + "/index.md");
  }

  return {
    props: {
      entry: {
        ...result.attributes,
        id: toASCIIString(result.attributes.title),
        content: parseMarkdown(result.body) as MarkdownRootNode,
      },
    },
  };
};
