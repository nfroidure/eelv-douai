import Head from "next/head";
import { useRouter } from "next/router";
import { darkBackground } from "../styles";
import { publicRuntimeConfig } from "../lib/config";

export default ({ name, title, description, image }) => {
  const router = useRouter();

  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{`${title ? `${title} - ` : ""}${name}`}</title>
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
      <link
        rel="manifest"
        href={publicRuntimeConfig.buildPrefix + "/static/manifest.json"}
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="robots" content="index,follow" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href={publicRuntimeConfig.buildPrefix + "/static/styles/normalize.css"}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@eelv_douai" />
      <meta name="twitter:creator" content="@eelv_douai" />
      <meta property="og:site_name" content={name} />
      <meta property="og:locale" content="fr_FR" />
      <meta
        property="og:type"
        content={router.pathname === "/" ? "website" : "article"}
      />
      <meta property="fb:admins" content="eelvdouai" />
      <meta
        property="og:url"
        content={
          publicRuntimeConfig.baseURL +
          publicRuntimeConfig.buildPrefix +
          router.pathname
        }
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image ? (
        <meta
          property="og:image"
          content={publicRuntimeConfig.baseURL + image}
        />
      ) : null}
    </Head>
  );
};
