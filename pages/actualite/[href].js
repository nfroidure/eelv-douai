import Layout from "../../layouts/main";
import MainContent from "../../components/mainContent";
import Gallery from "../../components/gallery";
import {
  baseFontSize,
  baseLineHeight,
  border,
  gutter,
  lightTextContent,
  linkColor,
  linkHoverColor,
  vRythm,
  green2,
} from "../../styles";
import path from "path";
import { promisify } from "util";
import { readFile } from "fs";
import LastNews from "../../components/lastNews";
import reduceCSSCalc from "reduce-css-calc";

const elementsMapping = {
  document: ({ content }) => content.map(mapNodesToElements),
  paragraph: ({ content }, index) => (
    <p className="root" key={index}>
      {content.map(mapNodesToElements)}
      <style jsx>{`
        .root {
          margin: 0 0 ${vRythm} 0;
        }
      `}</style>
    </p>
  ),
  "heading-1": ({ content }, index) => (
    <h1 className="root" key={index}>
      {content.map(mapNodesToElements)}
      <style jsx>{`
        .root {
          font-size: ${reduceCSSCalc(`calc(${baseFontSize} * 1.6)`)};
          line-height: ${reduceCSSCalc(`calc(${baseLineHeight} * 2)`)};
          font-weigth: bold;
          margin: 0 0 ${vRythm} 0;
        }
      `}</style>
    </h1>
  ),
  "heading-2": ({ content }, index) => (
    <h2 className="root" key={index}>
      {content.map(mapNodesToElements)}
      <style jsx>{`
        .root {
          font-size: ${reduceCSSCalc(`calc(${baseFontSize} * 1.2)`)};
          line-height: ${reduceCSSCalc(`calc(${baseLineHeight} * 1)`)};
          font-weigth: normal;
          margin: ${vRythm} 0 0 0;
        }
      `}</style>
    </h2>
  ),
  "heading-3": ({ content }, index) => (
    <h3 className="root" key={index}>
      {content.map(mapNodesToElements)}
      <style jsx>{`
        .root {
          font-size: ${baseFontSize};
          line-height: ${baseLineHeight};
          text-decoration: underline;
          font-weigth: normal;
          margin: ${vRythm} 0 0 0;
        }
      `}</style>
    </h3>
  ),
  "heading-4": ({ content }, index) => (
    <h4 className="root" key={index}>
      {content.map(mapNodesToElements)}
      <style jsx>{`
        .root {
          margin: 0 0 ${vRythm} 0;
        }
      `}</style>
    </h4>
  ),
  "heading-5": ({ content }, index) => (
    <h5 className="root" key={index}>
      {content.map(mapNodesToElements)}
      <style jsx>{`
        .root {
          margin: 0 0 ${vRythm} 0;
        }
      `}</style>
    </h5>
  ),
  "heading-6": ({ content }, index) => (
    <h6 className="root" key={index}>
      {content.map(mapNodesToElements)}
      <style jsx>{`
        .root {
          margin: 0 0 ${vRythm} 0;
        }
      `}</style>
    </h6>
  ),
  "unordered-list": ({ content }, index) => (
    <ol className="root" key={index}>
      {content.map(mapNodesToElements)}
      <style jsx>{`
        .root {
          margin: 0 0 ${vRythm} 0;
        }
      `}</style>
    </ol>
  ),
  "ordered-list": ({ content }, index) => (
    <ol className="root" key={index}>
      {content.map(mapNodesToElements)}
      <style jsx>{`
        .root {
          margin: 0 0 ${vRythm} 0;
        }
      `}</style>
    </ol>
  ),
  "list-item": ({ content }, index) => (
    <li className="root" key={index}>
      {content.map(mapNodesToElements)}
      <style jsx>{`
        .root > :global(:first-child:last-child) {
          margin: 0;
        }
      `}</style>
    </li>
  ),
  hyperlink: ({ content, data }, index) =>
    (data?.uri || "").startsWith("https://www.youtube.com/watch") ? (
      <span className="root" key={index}>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${data.uri.replace(
            "^.*v=([^&$]+).*$",
            "$1"
          )}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <style jsx>{`
          .root {
            display: block;
            overflow: hidden;
            padding-bottom: 56.25%;
            position: relative;
            height: 0;
          }

          .root iframe {
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            position: absolute;
          }
        `}</style>
      </span>
    ) : (
      <a className="root" href={data?.uri} key={index}>
        {content.map(mapNodesToElements)}
        <style jsx>{`
          .root,
          .root:visited {
            color: ${linkColor};
          }
          .root:hover,
          .root:focus {
            color: ${linkHoverColor};
          }
        `}</style>
      </a>
    ),
  blockquote: ({ content }, index) => (
    <blockquote className="root" key={index}>
      {content.map(mapNodesToElements)}
      <style jsx>{`
        .root {
          margin: 0 0 ${vRythm} 0;
          padding: 0 0 0 ${gutter};
          border-left: ${border} solid #${green2};
        }
      `}</style>
    </blockquote>
  ),
  hr: (_, index) => (
    <hr className="root" key={index}>
      <style jsx>{`
        .root {
          border-bottom: ${border} solid #${green2};
          margin: 0 0 ${vRythm} 0;
        }
      `}</style>
    </hr>
  ),
  text: ({ value, marks }, index) =>
    marks?.[0]?.type === "underline" ? (
      <u className="root" key={index}>
        {value}
        <style jsx>{`
          .root {
            margin: 0 0 ${vRythm} 0;
          }
        `}</style>
      </u>
    ) : marks?.[0]?.type === "italic" ? (
      <i className="root" key={index}>
        {value}
        <style jsx>{`
          .root {
            margin: 0 0 ${vRythm} 0;
          }
        `}</style>
      </i>
    ) : marks?.[0]?.type === "bold" ? (
      <strong className="root" key={index}>
        {value}
        <style jsx>{`
          .root {
            margin: 0 0 ${vRythm} 0;
          }
        `}</style>
      </strong>
    ) : (
      <span key={index}>{value}</span>
    ),
};

function mapNodesToElements({ nodeType, ...props }, index) {
  return elementsMapping[nodeType]
    ? elementsMapping[nodeType](props, index)
    : "";
}

const Page = ({ definition, lastNewsDefinition }) => (
  <Layout
    title={definition.title}
    description={definition.description}
    backgroundImage={definition?.hero?.href}
    asides={[<LastNews key={0} definition={lastNewsDefinition} />]}
  >
    <MainContent>
      <h1>{definition.title}</h1>
      <p>
        {definition.place ? `${definition.place}  - ` : ""}
        {new Date(definition.date).toLocaleString()}
      </p>
      <p>
        <strong>{definition.description}</strong>
      </p>
      {mapNodesToElements(definition.content)}
      {definition.illustrations && definition.illustrations.length > 1 ? (
        <Gallery illustrations={definition.illustrations} />
      ) : null}
      {definition.illustrations && definition.illustrations.length === 1 ? (
        <img
          href={definition.illustrations[0].href}
          alt={definition.illustrations[0].alt}
        />
      ) : null}
    </MainContent>
    <style jsx>{lightTextContent}</style>
  </Layout>
);

export default Page;

export async function getStaticPaths() {
  const contentfulEntries = JSON.parse(
    (
      await promisify(readFile)(path.join(process.cwd(), "data", "news.json"))
    ).toString()
  );
  const paths = contentfulEntries.map((post) => ({
    params: { href: post.href },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const contentfulEntries = JSON.parse(
    (
      await promisify(readFile)(path.join(process.cwd(), "data", "news.json"))
    ).toString()
  );

  return {
    props: {
      lastNewsDefinition: contentfulEntries.sort((itemA, itemB) =>
        Date.parse(itemA.date) > Date.parse(itemB.date) ? -1 : 1
      )[0],
      definition: contentfulEntries.find(({ href }) => href === params.href),
    },
  };
}
