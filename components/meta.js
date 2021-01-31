import Head from "next/head";
import { useRouter } from "next/router";
import { darkBackground } from "../styles";
import { publicRuntimeConfig } from "../lib/config";

export default ({ name, title, description, image }) => {
  const router = useRouter();
  const fullTitle = `${title ? `${title} - ` : ""}${name}`;

  return (
    <Head>
      <meta charSet="utf-8" />

      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content={darkBackground} />
      <meta name="author" content="EÉLV Douaisis" />
      <link
        rel="icon"
        type="image/svg+xml"
        href={publicRuntimeConfig.buildPrefix + "/static/images/favicon.svg"}
        sizes="any"
      />
      <link
        rel="icon"
        type="image/png"
        href={publicRuntimeConfig.buildPrefix + "/static/images/favicon-16.png"}
        sizes="16x16"
      />
      <link
        rel="icon shortcut"
        type="image/png"
        href={
          publicRuntimeConfig.buildPrefix + "/static/images/favicon-128.png"
        }
        sizes="128x128"
      />
      <meta name="robots" content="index,follow" />

      {/* Tech tags */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href={publicRuntimeConfig.buildPrefix + "/static/styles/normalize.css"}
      />

      {/* Open Graph / Facebook */}
      <meta property="og:locale" content="fr_FR" />
      <meta
        property="og:type"
        content={router.pathname === "/" ? "website" : "article"}
      />
      <meta
        property="og:url"
        content={
          publicRuntimeConfig.baseURL +
          publicRuntimeConfig.buildPrefix +
          router.pathname
        }
      />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
      <meta property="fb:admins" content="eelvdouai" />
      {image ? (
        <meta
          property="og:image"
          content={publicRuntimeConfig.baseURL + image}
        />
      ) : null}

      {/* Twitter */}
      {image ? (
        <meta property="twitter:card" content="summary_large_image" />
      ) : (
        <meta name="twitter:card" content="summary" />
      )}
      <meta name="twitter:site" content="@eelv_douai" />
      <meta name="twitter:creator" content="@eelv_douai" />
      <meta
        property="twitter:url"
        content={
          publicRuntimeConfig.baseURL +
          publicRuntimeConfig.buildPrefix +
          router.pathname
        }
      />
      {image ? (
        <meta
          property="twitter:image"
          content={publicRuntimeConfig.baseURL + image}
        />
      ) : null}
    </Head>
  );
};
