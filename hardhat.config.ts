import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@typechain/hardhat";
import "./tasks/block-number";
import "dotenv/config";

const RINKEBY_RPC_URL: string = process.env.RINKEBY_RPC_URL
  ? process.env.RINKEBY_RPC_URL?.toString().trim()
  : "https://eth-rinkeby";
const RINKEBY_PRIVATE_KEY: string = process.env.RINKEBY_PRIVATE_KEY
  ? process.env.RINKEBY_PRIVATE_KEY.toString().trim()
  : "0xKey";
const ETHERSCAN_API_KEY: string = process.env.ETHERSCAN_API_KEY
  ? process.env.ETHERSCAN_API_KEY.toString().trim()
  : "key";
const COINMARKETCAP_API_KEY: string = process.env.COINMARKETCAP_API_KEY
  ? process.env.COINMARKETCAP_API_KEY.toString().trim()
  : "key";

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
