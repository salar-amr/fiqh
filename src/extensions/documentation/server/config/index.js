"use strict";

const defaultDocumentationConfig = require("./config");

const defaultConfig = {
  ...defaultDocumentationConfig,
  session: {
    key: "plugin::documentation.sess",
    maxAge: 86400000,
    secretKeys: ["customDocSecret"],
  },
};

module.exports = {
  default: defaultConfig,
};
