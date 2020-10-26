const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "ba128da1d56f4020b1d1066a9633cdab";
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();
const account = "89eccb304675ca5e10c45ef5999633831ba2d5c3058b195532f47e65ac4aef20";


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(account, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    }
  },
  compilers: {
    solc: {
      version: "0.4.24"
    }
  }
};