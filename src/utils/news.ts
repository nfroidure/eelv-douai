import { type FrontMatterResult } from "front-matter";
import {
  datedPagesSorter,
  type BaseContentPageMetadata,
  type BaseListingPageMetadata,
} from "./contents";
import { parseMarkdown, type MarkdownRootNode } from "./markdown";
import { toASCIIString } from "./ascii";

export type NewsFrontmatterMetadata = {
  leafname?: string;
  title: string;
  description: string;
  date: string;
  draft: boolean;
  tags: string[];
  categories: string[];
  illustration?: {
    url: string;
    alt: string;
  };
};

export type News = {
  id: string;
  content: MarkdownRootNode;
} & NewsFrontmatterMetadata &
  BaseContentPageMetadata;

export const POSTS_PER_PAGE = 10;

export const entriesToBaseListingMetadata = (
  baseEntries: FrontMatterResult<NewsFrontmatterMetadata>[]
): BaseListingPageMetadata<News> => {
  const entries = baseEntries
    .map<News>((entry) => ({
      ...entry.attributes,
      id: entry.attributes.leafname || toASCIIString(entry.attributes.title),
      content: parseMarkdown(entry.body) as MarkdownRootNode,
    }))
    .filter((entry) => !entry.draft || process.env.NODE_ENV === "development")
    .sort(datedPagesSorter);

  return {
    entries,
    pagesCount: Math.ceil(entries.length / POSTS_PER_PAGE),
  };
};
