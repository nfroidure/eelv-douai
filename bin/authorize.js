// Copy/Pasta from https://developers.google.com/docs/api/quickstart/nodejs
const util = require("util");
const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const CREDENTIALS_PATH = "credentials.json";
const TOKEN_PATH = "token.json";

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

run();

async function run() {
  const credentials = JSON.parse(
    (await readFileAsync(CREDENTIALS_PATH)).toString()
  );
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
  let token;

  try {
    token = JSON.parse((await readFileAsync(TOKEN_PATH)).toString());

    if (token.expiry_date > Date.now()) {
      console.log("Using local token");
    } else {
      const newToken = await oAuth2Client.refreshToken(token.refresh_token);
      
      console.log("Using local refreshed token");
      token.access_token = newToken.tokens.access_token;
      token.expiry_date = newToken.tokens.expiry_date;
    }
  } catch (err) {
    console.log('No token, generating a new one', err)
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: SCOPES,
    });
    console.log("Authorize this app by visiting this url:", authUrl);

    const code = await getAuthCode();

    token = (await oAuth2Client.getToken(code)).tokens;
  }
  oAuth2Client.setCredentials(token);
  await writeFileAsync(TOKEN_PATH, JSON.stringify(token, null, 2));
  console.log("Token stored to", TOKEN_PATH);

  const sheets = google.sheets({ version: "v4", auth: oAuth2Client });
  const res = await sheets.spreadsheets.get(
    {
      spreadsheetId: "10QOisHQWbAI5iQfQ4dL3RF_fhTNy4SoMKg_OodRxmlY",
    }
  );
  console.log(`The title of the document is: ${res.data.properties.title}`);
}

async function getAuthCode() {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("Enter the code from that page here: ", (code) => {
      rl.close();
      resolve(code);
    });
  });
}
