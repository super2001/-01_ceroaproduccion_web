module.exports = {
  reactStrictMode: true,
};

const withTranspileModules = require("next-transpile-modules")([
  "@super2001/lcomponents",
]);

module.exports = withTranspileModules({});
