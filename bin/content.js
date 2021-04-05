const axios = require("axios");
const path = require("path");
const util = require("util");
const fs = require("fs");
const writeFileAsync = util.promisify(fs.writeFile);

run();

async function run() {
  try {
    const response = await axios({
      method: "get",
      url: `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?content_type=news`,
      headers: {
        referer: "Web Site Syncer",
      },
      params: {
        access_token: process.env.CONTENTFUL_API_TOKEN,
      },
    });
    const contentfulData = response.data;
    const contentfulEntries = contentfulData.items.map((item) => ({
      title: item.fields.title,
      description: item.fields.description,
      href: item.fields.filename,
      date: new Date(item.fields.created_at).toISOString(),
      place: item.fields.place || null,
      content: item.fields.content,
      hero: reshapeIllustrations(
        item.fields.hero ? [item.fields.hero] : [],
        contentfulData
      )[0],
      illustrations: reshapeIllustrations(
        item.fields.illustrations || [],
        contentfulData
      ),
    }));
    await writeFileAsync(
      path.join(__dirname, "..", "data", "news.json"),
      JSON.stringify(contentfulEntries, null, 2)
    );
    console.log("Content successfully retrieved!");
  } catch (err) {
    console.error(
      "Got en error while syncing:",
      err.stack,
      err.response ? JSON.stringify(err.response.data) : ""
    );
  }
}

function reshapeIllustrations(illustrations, contentfulData) {
  return illustrations
    .filter((illustration) => illustration.sys.type === "Link")
    .map((illustration) => {
      const asset = contentfulData.includes.Asset.find(
        (asset) => asset.sys.id === illustration.sys.id
      );

      return {
        href: asset.fields.file.url,
        alt: asset.fields.title,
      };
    });
}
