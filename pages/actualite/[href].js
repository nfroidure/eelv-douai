import Layout from "../../layouts/main";
import MainContent from "../../components/mainContent";
import Gallery from "../../components/gallery";
import { lightTextContent } from "../../styles";
import path from "path";
import { promisify } from "util";
import { readFile } from "fs";
import LastNews from "../../components/lastNews";

const elementsMapping = {
  document: ({ content }) => content.map(mapNodesToElements),
  paragraph: ({ content }, index) => (
    <p key={index}>{content.map(mapNodesToElements)}</p>
  ),
  "heading-1": ({ content }, index) => (
    <h1 key={index}>{content.map(mapNodesToElements)}</h1>
  ),
  "heading-2": ({ content }, index) => (
    <h2 key={index}>{content.map(mapNodesToElements)}</h2>
  ),
  "heading-3": ({ content }, index) => (
    <h3 key={index}>{content.map(mapNodesToElements)}</h3>
  ),
  "heading-4": ({ content }, index) => (
    <h4 key={index}>{content.map(mapNodesToElements)}</h4>
  ),
  "heading-5": ({ content }, index) => (
    <h5 key={index}>{content.map(mapNodesToElements)}</h5>
  ),
  "heading-6": ({ content }, index) => (
    <h6 key={index}>{content.map(mapNodesToElements)}</h6>
  ),
  "unordered-list": ({ content }, index) => (
    <ol key={index}>{content.map(mapNodesToElements)}</ol>
  ),
  "ordered-list": ({ content }, index) => (
    <ol key={index}>{content.map(mapNodesToElements)}</ol>
  ),
  "list-item": ({ content }, index) => (
    <li key={index}>{content.map(mapNodesToElements)}</li>
  ),
  hyperlink: ({ content, data }, index) =>
    (data?.uri || "").startsWith("https://www.youtube.com/watch") ? (
      <span key={index} className="root">
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
      <a href={data?.uri} key={index}>
        {content.map(mapNodesToElements)}
      </a>
    ),
  blockquote: ({ content }, index) => (
    <blockquote key={index}>{content.map(mapNodesToElements)}</blockquote>
  ),
  hr: (_, index) => <hr key={index} />,
  text: ({ value, marks }, index) =>
    marks?.[0]?.type === "underline" ? (
      <u key={index}>{value}</u>
    ) : marks?.[0]?.type === "italic" ? (
      <i key={index}>{value}</i>
    ) : marks?.[0]?.type === "bold" ? (
      <strong key={index}>{value}</strong>
    ) : (
      <span key={index}>{value}</span>
    ),
};

function mapNodesToElements({ nodeType, ...props }, index) {
  return elementsMapping[nodeType]
    ? elementsMapping[nodeType](props, index)
    : "";
}

export default ({ definition, lastNewsDefinition }) => (
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
