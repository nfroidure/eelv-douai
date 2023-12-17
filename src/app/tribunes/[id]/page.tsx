import buildMetadata from "../../../utils/metadata";
import { readEntries } from "../../../utils/frontmatter";
import { fixText } from "../../../utils/text";
import { pathJoin } from "../../../utils/files";
import ContentBlock from "../../../components/contentBlock";
import { Fragment } from "react";
import Hero from "../../../components/hero";
import MainContent from "../../../components/mainContent";
import {
  entriesToBaseListingMetadata,
  type Tribune,
  type TribuneFrontmatterMetadata,
} from "../../../utils/tribunes";
import Tribunes from "../../../components/tribunes";

export async function generateMetadata({
  params,
}: {
  params?: { id: string };
}) {
  const baseListingMetadata = entriesToBaseListingMetadata(
    await readEntries<TribuneFrontmatterMetadata>(
      pathJoin(".", "contents", "tribunes")
    )
  );
  const entry = baseListingMetadata.entries.find(
    ({ id }) => id === (params || {}).id
  ) as Tribune;

  return buildMetadata({
    pathname: `/tribunes/${entry.id}`,
    title: fixText(entry.title),
    description: fixText(entry.description),
  });
}

export default async function Page({ params }: { params: { id: string } }) {
  const baseListingMetadata = entriesToBaseListingMetadata(
    await readEntries<TribuneFrontmatterMetadata>(
      pathJoin(".", "contents", "tribunes")
    )
  );
  const entry = baseListingMetadata.entries.find(
    ({ id }) => id === (params || {}).id
  ) as Tribune;

  return (
    <Fragment>
      <Hero />
      <MainContent>
        <ContentBlock>
          <Tribunes entries={[entry]} base={"/tribunes/"} />
        </ContentBlock>
      </MainContent>
    </Fragment>
  );
}

export async function generateStaticParams() {
  const baseListingMetadata = entriesToBaseListingMetadata(
    await readEntries<TribuneFrontmatterMetadata>(
      pathJoin(".", "contents", "tribunes")
    )
  );
  const paths = baseListingMetadata.entries.map((entry) => ({
    id: entry.id,
  }));

  return paths;
}
