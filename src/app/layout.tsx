import "../../styles/normalize.css";
import "../../styles/main.scss";
import styles from "./layout.module.scss";
import { ORGANISATION_PRIMARY_COLOR } from "../utils/constants";
import Header from "../components/header";
import Footer from "../components/footer";
import Nav from "../components/nav";
import JoinUs from "../components/joinUs";
import SocialBox from "../components/socialBox";
import Newsletter from "../components/newsletter";
import GridSystem from "../components/_gridSystem";
import type { Viewport } from "next";
import LastNews from "@/components/lastNews";
import {
  entriesToBaseListingMetadata,
  type NewsFrontmatterMetadata,
} from "@/utils/news";
import { pathJoin } from "@/utils/files";
import { readEntries } from "@/utils/frontmatter";

export const viewport: Viewport = {
  themeColor: ORGANISATION_PRIMARY_COLOR,
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseListingMetadata = entriesToBaseListingMetadata(
    await readEntries<NewsFrontmatterMetadata>(
      pathJoin(".", "contents", "actualite"),
    ),
  );

  return (
    <html lang="fr">
      <body>
        {process.env.NODE_ENV === "development" ? <GridSystem /> : null}
        <div className={styles.root}>
          <Header />
          <Nav />
          {children}
          <div className={styles.asides}>
            <Newsletter />
            <LastNews definition={baseListingMetadata.entries[0]} />
            <JoinUs />
            <SocialBox />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
