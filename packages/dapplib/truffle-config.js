require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'include clock bottom slab green rare remain pulp grace gloom tackle gasp'; 
let testAccounts = [
"0x7081e6f37d45ef0b638bdd0e3f0a50cfaf0e1fe82a5cb9841f5a69d493714dfe",
"0xa87d85ea0525292896cfc1a20670f4ba4e85c4faaafbc3aeae2f1d6cbb1ad12c",
"0xb32bd7e156125939c0ac838415cb2240942dc127bbdf985dbb2c9ebb17bff7c2",
"0x830f4d06f54741428d0991cd4975d157472edc85ac2ca9707504b9b1e5cabbfe",
"0x4e8967a52b44fbc681e9bf57507052aeee723047ea5c6248a03c8cf0bea0112f",
"0x574ae36ddfb454be24b7e23cd7db8aa50cd389e3c27adb9866ed04d567d6a0ec",
"0x50ab9787478db48a9e6898304e7c36ebfd092b7de75182ef0013172ad0b0a410",
"0xd3644ff865304cf7d7af6f03249b53790d1ec7b2051b5100ca05b17a4b2671dc",
"0x1ea7a7db3c60dc0677a3aa9f34b4118a3fbd5372d0cd1c1d6307e546ea10f36e",
"0x207c382fbeef8e1d4d1b62954534528efe8c0d1dba5d2c1cec466059d5c6b615"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

