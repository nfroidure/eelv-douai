import type { BaseContentPageMetadata } from "./contents";
import type { MarkdownRootNode } from "./markdown";

export type TribuneFrontmatterMetadata = {
  author: string;
  date: string;
  role: string;
  publication: string;
};

export type Tribune = {
  id: string;
  content: MarkdownRootNode;
} & TribuneFrontmatterMetadata &
  BaseContentPageMetadata;
