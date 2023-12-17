import buildMetadata from "../../utils/metadata";
import { readEntries } from "../../utils/frontmatter";
import { readParams } from "../../utils/params";
import { pathJoin } from "../../utils/files";
import Hero from "../../components/hero";
import MainContent from "../../components/mainContent";
import Entries from "./entries";
import { Fragment } from "react";
import {
  POSTS_PER_PAGE,
  entriesToBaseListingMetadata,
  type News,
  type NewsFrontmatterMetadata,
} from "../../utils/news";
import { slicePage } from "../../utils/pagination";
import type { BasePagingPageMetadata } from "../../utils/contents";
import type { BuildQueryParamsType } from "../../utils/params";
import { type Metadata } from "next";

export type Props = BasePagingPageMetadata<News>;

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
}): Promise<Metadata> {
  const page = params?.page || 1;
  const title = `Notre actualité${page && page !== 1 ? ` - page ${page}` : ""}`;
  const description =
    "Découvrez les dernières actions des écologistes de Douai et du Douaisis.";

  const metadata = await buildMetadata({
    pathname: "/actualite",
    title,
    description,
  });

  return {
    ...metadata,
    alternates: {
      ...(metadata.alternates || {}),
      types: {
        ...(metadata.alternates?.types || {}),
        "application/rss+xml": [
          { url: "/actualite.rss", title: `${title} (RSS)` },
        ],
        "application/atom+xml": [
          { url: "/actualite.atom", title: `${title} (Atom)` },
        ],
      },
    },
  };
}

export default async function Page({ params }: { params: { page: string } }) {
  const castedParams = readParams(PARAMS_DEFINITIONS, params || {}) as Params;
  const page = castedParams?.page || 1;
  const baseListingMetadata = entriesToBaseListingMetadata(
    await readEntries<NewsFrontmatterMetadata>(
      pathJoin(".", "contents", "actualite")
    )
  );
  const entries = slicePage(baseListingMetadata.entries, page, POSTS_PER_PAGE);

  return (
    <Fragment>
      <Hero />
      <MainContent>
        <Entries
          entries={entries}
          pagesCount={baseListingMetadata.pagesCount}
          page={page}
        />
      </MainContent>
    </Fragment>
  );
}
