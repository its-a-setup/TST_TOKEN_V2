require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

INFURA_API_KEY=process.env.INFURA_API_KEY;
RINKEBY_PRIVATE_KEY=process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.13",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`${RINKEBY_PRIVATE_KEY}`]
    }
  }
};