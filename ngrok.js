require('dotenv').config();
const ngrok = require('ngrok');
const clipboardy = require('clipboardy');

const PORT = process.env.PORT || 8080;
const COPY_URL = process.env.COPY_URL;

(async function() {
  const url = await ngrok.connect(PORT);
  console.log(`ngrok url: ${url}`);
  if (COPY_URL) {
    clipboardy.writeSync(url);
    console.log(`Copied url to clipboard.`);
  }
})();
