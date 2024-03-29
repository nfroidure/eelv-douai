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

export const viewport: Viewport = {
  themeColor: ORGANISATION_PRIMARY_COLOR,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
            <JoinUs />
            <SocialBox />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
