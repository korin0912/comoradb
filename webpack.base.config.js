const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
  "entry": "index.js",
  /* ... */
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        { family: "M PLUS Rounded 1c" }
      ]
    })
  ]
}
