import { join as pathJoin } from "path";
import Page, { generateMetadata } from "../../page";
import { readEntries } from "../../../../utils/frontmatter";
import { buildAssets } from "../../../../utils/build";
import {
  entriesToBaseListingMetadata,
  type TribuneFrontmatterMetadata,
} from "../../../../utils/tribunes";

export { generateMetadata };
export default Page;

export async function generateStaticParams() {
  const baseListingMetadata = entriesToBaseListingMetadata(
    await readEntries<TribuneFrontmatterMetadata>(
      pathJoin(".", "contents", "tribunes")
    )
  );
  const { title, description } = await generateMetadata({});

  // WARNING: This is not a nice way to generate the feeds
  // but having scripts run in the NextJS build context is a real
  // pain
  await buildAssets(
    {
      ...baseListingMetadata,
      title: title as string,
      description: description as string,
    },
    "/tribunes"
  );

  const paths = new Array(baseListingMetadata.pagesCount)
    .fill("")
    .map((_, index) => index + 1)
    .filter((page) => page !== 1)
    .map((page) => ({ page: page.toString() }));

  return paths;
}
