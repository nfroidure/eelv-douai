import type { BaseContentPageMetadata } from "./contents";
import type { MarkdownRootNode } from "./markdown";

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
