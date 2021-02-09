import { NAME, DESCRIPTION } from "../constants";
import {
  baseFontSize,
  vRythm,
  gutter,
  startS,
  endS,
  startM,
  endM,
  startL,
  endL,
  startXL,
  lightBackground,
  darkTextColor,
} from "../styles";
import Meta from "../components/meta";
import Header from "../components/header";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Hero from "../components/hero";
import JoinUs from "../components/joinUs";
import SocialBox from "../components/socialBox";
import Newsletter from "../components/newsletter";

export default ({
  title,
  description,
  backgroundImage,
  children,
  asides = [],
}) => (
  <div className="root">
    <Meta
      name={NAME}
      description={description || DESCRIPTION}
      title={title}
      image={backgroundImage}
    />
    <Header />
    <Nav />
    <Hero backgroundImage={backgroundImage} />
    <main>{children}</main>
    <aside>
      {[
        <Newsletter key="-3" />,
        <JoinUs key="-2" />,
        <SocialBox key="-1" />,
        ...asides,
      ]}
    </aside>
    <Footer />
    <style jsx global>{`
      body {
        font-family: "Roboto", sans-serif;
        font-size: ${baseFontSize};
      }
      *,
      *:after,
      *:before {
        line-height: ${vRythm};
        box-sizing: border-box;
      }
      html,
      body,
      div#__next {
        height: 100%;
      }
    `}</style>
    <style jsx>{`
      .root {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100%;
        background: ${lightBackground};
        color: ${darkTextColor};
      }
      main {
        flex: 1;
        display: flex;
      }
      aside {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: ${vRythm} ${gutter};
      }
      @media screen and (min-width: ${startS}) and (max-width: ${endS}) {
        main {
          justify-content: flex-start;
        }
        aside {
          padding: 0 ${gutter} ${vRythm} ${gutter};
        }
      }
      @media screen and (min-width: ${startM}) and (max-width: ${endM}) {
        main {
          padding: 0 ${gutter};
          justify-content: center;
        }
        aside {
          padding: 0 ${gutter} ${vRythm} ${gutter};
        }
      }
      @media screen and (min-width: ${startL}) and (max-width: ${endL}) {
        main {
          width: ${startL};
          margin: 0 auto;
        }
        aside {
          width: ${startL};
          margin: 0 auto ${vRythm} auto;
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media screen and (min-width: ${startXL}) {
        main {
          width: ${startXL};
          margin: 0 auto;
        }
        aside {
          width: ${startXL};
          margin: 0 auto ${vRythm} auto;
          grid-template-columns: repeat(2, 1fr);
        }
      }
    `}</style>
  </div>
);
