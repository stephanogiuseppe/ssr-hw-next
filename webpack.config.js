const Dotenv = require('dotenv-webpack');
const path = require('path')

module.exports = {
  plugins: [
    new Dotenv({ path: path.join(__dirname, '.env'), systemvars: true })
  ]
}
