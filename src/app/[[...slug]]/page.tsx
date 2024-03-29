import styles from "./page.module.scss";
import { fixText } from "../../utils/text";
import {
  parseMarkdown,
  qualifyPath,
  renderMarkdown,
} from "../../utils/markdown";
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
    url: string;
    alt: string;
    position?: {
      x: "left" | "center" | "right" | string;
      y: "top" | "center" | "bottom" | string;
    };
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
    pathname: "/" + pathJoin(...(params.slug || [])),
    title: fixText(entry.title),
    description: fixText(entry.description),
    ...(typeof entry.illustration !== "undefined"
      ? {
          image: {
            url: qualifyPath(entry.illustration.url),
            alt: entry.illustration.alt,
          },
        }
      : {}),
  });
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const entry = await parsePage(params.slug);

  return (
    <Fragment>
      <Hero
        backgroundImage={entry.illustration?.url}
        backgroundPositionX={entry.illustration?.position?.x}
        backgroundPositionY={entry.illustration?.position?.y}
      />
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
