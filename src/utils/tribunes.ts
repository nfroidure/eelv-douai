import { type FrontMatterResult } from "front-matter";
import {
  datedPagesSorter,
  type BaseContentPageMetadata,
  type BaseListingPageMetadata,
} from "./contents";
import {
  collectMarkdownText,
  parseMarkdown,
  type MarkdownRootNode,
} from "./markdown";
import { summarize } from "./summarize";
import { toASCIIString } from "./ascii";

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

export const POSTS_PER_PAGE = 10;

export const PUBLICATIONS = {
  "douai-notre-ville": "Douai Notre Ville",
};

export const entriesToBaseListingMetadata = (
  baseEntries: FrontMatterResult<TribuneFrontmatterMetadata>[]
): BaseListingPageMetadata<Tribune> => {
  const entries = baseEntries
    .map<Tribune>((entry) => {
      const content = parseMarkdown(entry.body) as MarkdownRootNode;

      return {
        ...entry.attributes,
        id: toASCIIString(
          `${entry.attributes.publication}-${new Date(
            entry.attributes.date
          ).getFullYear()}-${new Date(entry.attributes.date).getMonth() + 1}`
        ),
        title: `${entry.attributes.author} - ${new Intl.DateTimeFormat(
          "fr-FR",
          {
            year: "numeric",
            month: "long",
          }
        ).format(new Date(entry.attributes.date))}`,
        description: `Tribune de ${entry.attributes.author} dans le ${
          PUBLICATIONS[
            entry.attributes.publication.toLowerCase().replace(/\s+/g, "-")
          ]
        } du ${new Intl.DateTimeFormat("fr-FR", {
          dateStyle: "full",
        }).format(new Date(entry.attributes.date))}`,
        summary: summarize(collectMarkdownText(content), 155),
        content,
      };
    })
    .sort(datedPagesSorter);

  return {
    entries,
    pagesCount: Math.ceil(entries.length / POSTS_PER_PAGE),
  };
};
