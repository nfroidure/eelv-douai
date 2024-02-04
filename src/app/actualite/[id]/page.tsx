import buildMetadata from "../../../utils/metadata";
import { readEntries } from "../../../utils/frontmatter";
import { fixText } from "../../../utils/text";
import { pathJoin } from "../../../utils/files";
import { datedPagesSorter } from "../../../utils/contents";
import { qualifyPath, renderMarkdown } from "../../../utils/markdown";
import ContentBlock from "../../../components/contentBlock";
import Paragraph from "../../../components/p";
import { Fragment } from "react";
import Hero from "../../../components/hero";
import MainContent from "../../../components/mainContent";
import {
  entriesToBaseListingMetadata,
  type News,
  type NewsFrontmatterMetadata,
} from "../../../utils/news";

export async function generateMetadata({
  params,
}: {
  params?: { id: string };
}) {
  const baseListingMetadata = entriesToBaseListingMetadata(
    await readEntries<NewsFrontmatterMetadata>(
      pathJoin(".", "contents", "actualite")
    )
  );
  const entry = baseListingMetadata.entries.find(
    ({ id }) => id === (params || {}).id
  ) as News;

  return buildMetadata({
    pathname: `/actualite/${entry.id}`,
    title: fixText(entry.title),
    description: fixText(entry.description),
    type: "article",
    ...(typeof entry.illustration !== "undefined"
      ? {
          image: {
            url: qualifyPath(entry.illustration.url),
            alt: entry.illustration.alt,
          },
        }
      : {}),
    ...(typeof entry.audio !== "undefined"
      ? {
          audio: {
            url: qualifyPath(entry.audio.url),
            type: entry.audio.type,
          },
        }
      : {}),
  });
}

export default async function Page({ params }: { params: { id: string } }) {
  const baseListingMetadata = entriesToBaseListingMetadata(
    await readEntries<NewsFrontmatterMetadata>(
      pathJoin(".", "contents", "actualite")
    )
  );
  const entry = baseListingMetadata.entries.find(
    ({ id }) => id === (params || {}).id
  ) as News;
  const baseLinkedEntries = baseListingMetadata.entries
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
  const pastEntries = baseLinkedEntries.filter(
    (anEntry) => Date.parse(anEntry.date) < Date.parse(entry.date)
  );
  const recenterEntries = baseLinkedEntries.filter(
    (anEntry) => Date.parse(anEntry.date) > Date.parse(entry.date)
  );
  const linkedEntries = pastEntries.concat(recenterEntries).slice(0, 3);

  return (
    <Fragment>
      <Hero backgroundImage={entry.illustration?.url} />
      <MainContent>
        <ContentBlock>
          {renderMarkdown({ index: 0 }, entry.content)}
          <Paragraph>
            Publié le {new Date(entry.date).toLocaleString()}.
          </Paragraph>
        </ContentBlock>
      </MainContent>
    </Fragment>
  );
}

export async function generateStaticParams() {
  const baseListingMetadata = entriesToBaseListingMetadata(
    await readEntries<NewsFrontmatterMetadata>(
      pathJoin(".", "contents", "actualite")
    )
  );
  const paths = baseListingMetadata.entries.map((entry) => ({
    id: entry.id,
  }));

  return paths;
}
