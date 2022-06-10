require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("./tasks/block-number");
require("dotenv").config();

const RINKEBY_RPC_URL =
  process.env.RINKEBY_RPC_URL.toString().trim() || "https://eth-rinkeby";
const RINKEBY_PRIVATE_KEY =
  process.env.RINKEBY_PRIVATE_KEY.toString().trim() || "0xKey";
const ETHERSCAN_API_KEY =
  process.env.ETHERSCAN_API_KEY.toString().trim() || "key";
const COINMARKETCAP_API_KEY =
  process.env.COINMARKETCAP_API_KEY.toString().trim() || "key";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
      chainId: 4,
    },
  },
  solidity: "0.8.8",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: false,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
    token: "MATIC",
  },
};
