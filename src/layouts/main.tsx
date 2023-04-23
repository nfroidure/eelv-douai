import {
  NAME,
  DESCRIPTION,
  CSS_BREAKPOINT_START_L,
  CSS_BREAKPOINT_END_S,
  CSS_BREAKPOINT_START_M,
  CSS_BREAKPOINT_END_M,
  CSS_BREAKPOINT_START_XL,
  CSS_BREAKPOINT_END_L,
} from "../utils/constants";
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
  <div className="root">
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
    <div className="asides">
      {[
        <Newsletter key="-3" />,
        <JoinUs key="-2" />,
        <SocialBox key="-1" />,
        ...asides,
      ]}
    </div>
    <Footer />
    <style jsx>{`
      .root {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100%;
        background: var(--light);
        color: var(--dark);
      }
      div.asides {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: var(--vRythm) var(--gutter);
      }
      @media screen and (max-width: ${CSS_BREAKPOINT_END_S}) {
        div.asides {
          padding: 0 var(--gutter) var(--vRythm) var(--gutter);
        }
      }
      @media screen and (min-width: ${CSS_BREAKPOINT_START_M}) and (max-width: ${CSS_BREAKPOINT_END_M}) {
        div.asides {
          padding: 0 var(--gutter) var(--vRythm) var(--gutter);
        }
      }
      @media screen and (min-width: ${CSS_BREAKPOINT_START_L}) and (max-width: ${CSS_BREAKPOINT_END_L}) {
        div.asides {
          width: ${CSS_BREAKPOINT_START_L};
          margin: 0 auto var(--vRythm) auto;
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media screen and (min-width: ${CSS_BREAKPOINT_START_XL}) {
        div.asides {
          width: ${CSS_BREAKPOINT_START_XL};
          margin: 0 auto var(--vRythm) auto;
          grid-template-columns: repeat(2, 1fr);
        }
      }
    `}</style>
  </div>
);

export default Layout;
