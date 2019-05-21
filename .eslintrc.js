module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  env: {
    jest: true
  },
  rules: {
    // "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "comma-dangle": "off",
    "semi": ["never"],
    "quotes": 0
  },
  globals: {
    fetch: false
  }
}
