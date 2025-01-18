const axios = require("axios");
const path = require("path");
const util = require("util");
const fs = require("fs");
const readFileAsync = util.promisify(fs.readFile);

const TOKEN_PATH = "token.json";

run();

async function run() {
  const token = JSON.parse((await readFileAsync(TOKEN_PATH)).toString());
  try {
    const response = await axios({
      method: "get",
      url: `https://sheets.googleapis.com/v4/spreadsheets/10QOisHQWbAI5iQfQ4dL3RF_fhTNy4SoMKg_OodRxmlY/values/A1:M24`,
      headers: {
        referer: "Web Site Syncer"
      },
      params: {
        access_token: token.access_token
      }
    });
    const data = response.data.values
      .map(row => ({
        name: row[0],
        emails: [...(row[1] ? [row[1]] : []), ...(row[2] ? [row[2]] : [])],
        phone: row[5],
        role: row[7],
        responsibilities: (row[8] || "").split(",").map(s => s.trim()),
        mastodon: row[9] || {}.undef,
        facebook: row[10] || {}.undef,
        status: row[11],
        bio: row[12] || {}.undef
      }))
      .filter(member => member.status === "ok")
      .filter(member => ["Équipe d'animation", "Bureau"].includes(member.role));
    fs.writeFileSync(
      path.join(__dirname, "..", "data", "members.json"),
      JSON.stringify(data, null, 2)
    );
    console.log("Data successfully synced!");
  } catch (err) {
    console.error(
      "Got en error while syncing:",
      err.stack,
      err.response ? JSON.stringify(err.response.data) : ""
    );
  }
}
