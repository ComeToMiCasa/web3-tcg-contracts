require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const { API_URL, PRIVATE_KEY } = process.env;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
      compilers: [{
          version: "0.5.5",
        },
        {
          version: "0.8.9",
          settings: {},
        },
      ]},
      networks: {
        localganache: {
          url: "HTTP://127.0.0.1:7545",
          accounts: ["0x510e771db1f77b6049fb082b191d420be4e560c9c644914306159a016d1bce55"]
        },
        sepolia: {
          url: API_URL,
          accounts: [`0x${PRIVATE_KEY}`]
        }
      }
    };