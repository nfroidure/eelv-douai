import styles from "./page.module.scss";
import { fixText } from "../../utils/text";
import { parseMarkdown, renderMarkdown } from "../../utils/markdown";
import { readEntry } from "../../utils/frontmatter";
import { pathJoin, readDirDeep } from "../../utils/files";
import { toASCIIString } from "../../utils/ascii";
import ContentBlock from "../../components/contentBlock";
import type { MarkdownRootNode } from "../../utils/markdown";
import buildMetadata from "../../utils/metadata";
import { Fragment } from "react";
import MainContent from "../../components/mainContent";
import Hero from "../../components/hero";

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

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}) {
  const entry = await parsePage(params.slug);

  return buildMetadata({
    pathname: "/a_propos/bureau",
    title: fixText(entry.title),
    description: fixText(entry.description),
  });
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const entry = await parsePage(params.slug);

  return (
    <Fragment>
      <Hero backgroundImage={entry.illustration?.href} />
      <MainContent>
        <ContentBlock>
          {renderMarkdown({ index: 0 }, entry.content)}
          <div className={styles.clear}></div>
        </ContentBlock>
      </MainContent>
    </Fragment>
  );
}

async function parsePage(slug: string[] = []): Promise<Entry> {
  const path = pathJoin("contents", "pages", ...slug);
  let result;

  try {
    result = await readEntry<PageFrontmatterMetadata>(path + ".md");
  } catch (err) {
    result = await readEntry<PageFrontmatterMetadata>(path + "/index.md");
  }

  return {
    ...result.attributes,
    id: toASCIIString(result.attributes.title),
    content: parseMarkdown(result.body) as MarkdownRootNode,
  };
}

export async function generateStaticParams() {
  const base = pathJoin(".", "contents", "pages");
  const paths = (await readDirDeep(`${base}/**/*.md`)).map((path) => {
    const slug = path
      .replace(base + "/", "")
      .replace(".md", "")
      .split("/");

    if (slug[slug.length - 1] === "index") {
      slug.pop();
    }

    return { slug };
  });

  return paths;
}
