require('dotenv').config();

const PORT = process.env.PORT || 8080;

module.exports = {
  devServer: {
    disableHostCheck: true,
    port: PORT,
    progress: false,
  }
};