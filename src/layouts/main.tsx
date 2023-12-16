import styles from "./main.module.scss";
import { NAME, DESCRIPTION } from "../utils/constants";
import Meta from "../components/meta";
import Header from "../components/header";
import MainContent from "../components/mainContent";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Hero from "../components/hero";
import JoinUs from "../components/joinUs";
import SocialBox from "../components/socialBox";
import Newsletter from "../components/newsletter";
import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title: string;
  description?: string;
  image?: string;
  asides?: ReactNode[];
};

const Layout = ({
  title,
  description,
  image,
  children,
  asides = [],
}: Props) => (
  <div className={styles.root}>
    <Meta
      name={NAME}
      description={description || DESCRIPTION}
      title={title}
      image={image}
    />
    <Header />
    <Nav />
    <Hero backgroundImage={image} />
    <MainContent>{children}</MainContent>
    <div className={styles.asides}>
      {[
        <Newsletter key="-3" />,
        <JoinUs key="-2" />,
        <SocialBox key="-1" />,
        ...asides,
      ]}
    </div>
    <Footer />
  </div>
);

export default Layout;
