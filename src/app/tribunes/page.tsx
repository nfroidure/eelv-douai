import buildMetadata from "../../utils/metadata";
import { pathJoin } from "../../utils/files";
import { readEntries } from "../../utils/frontmatter";
import { slicePage } from "../../utils/pagination";
import { readParams } from "../../utils/params";
import { Fragment } from "react";
import MainContent from "../../components/mainContent";
import TribuneEntries from "./entries";
import Hero from "../../components/hero";
import type { BasePagingPageMetadata } from "../../utils/contents";
import {
  POSTS_PER_PAGE,
  entriesToBaseListingMetadata,
  type Tribune,
  type TribuneFrontmatterMetadata,
} from "../../utils/tribunes";
import type { BuildQueryParamsType } from "../../utils/params";

export type Props = BasePagingPageMetadata<Tribune>;

const PARAMS_DEFINITIONS = {
  page: {
    type: "number",
    mode: "unique",
  },
} as const;

type Params = BuildQueryParamsType<typeof PARAMS_DEFINITIONS>;

export async function generateMetadata({
  params,
}: {
  params?: { page: string };
}) {
  const page = params?.page || 1;
  const title = `Tribunes des élu⋅es${
    page && page !== 1 ? ` - page ${page}` : ""
  }`;
  const description = "Découvrez les tribunes des élu⋅es EÉLV du Douaisis.";

  return buildMetadata({
    pathname: "/tribunes",
    title,
    description,
  });
}

export default async function Page({ params }: { params: { page: string } }) {
  const castedParams = readParams(PARAMS_DEFINITIONS, params || {}) as Params;
  const page = castedParams?.page || 1;
  const baseListingMetadata = entriesToBaseListingMetadata(
    await readEntries<TribuneFrontmatterMetadata>(
      pathJoin(".", "contents", "tribunes")
    )
  );
  const entries = slicePage(baseListingMetadata.entries, page, POSTS_PER_PAGE);

  return (
    <Fragment>
      <Hero />
      <MainContent>
        <TribuneEntries
          entries={entries}
          pagesCount={baseListingMetadata.pagesCount}
          page={page}
        />
      </MainContent>
    </Fragment>
  );
}
