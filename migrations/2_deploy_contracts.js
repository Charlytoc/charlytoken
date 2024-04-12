const CharlyToken = artifacts.require("CharlyToken");

module.exports = function (deployer) {
  deployer.deploy(CharlyToken, "1000000000000000000000"); // 1000 CharlyTokens
};

