require('dotenv').config();
const ngrok = require('ngrok');
const clipboardy = require('clipboardy');

const PORT = process.env.PORT || 8080;
const COPY_URL = process.env.COPY_URL;

(async function() {
  const url = await ngrok.connect(PORT);
  if (COPY_URL) {
    console.log(`Copying URL to clipboard: ${url}`);
    clipboardy.writeSync(url);
  }
})();
