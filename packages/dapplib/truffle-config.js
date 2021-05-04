require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift raise pizza hole guess clog slot general'; 
let testAccounts = [
"0xa35cf4bf8fe32b93898ffef7fb527fb3429e98c1d524b21926cb8a7e37f33027",
"0x7ccdd815cd6ac22e02a584a1a8366031164b86e903e85a2c3afc587012f13f0d",
"0xa74d01d84ec259120da84e239be7454c8fb56bf53281deecff363f509b63a622",
"0xed4a32fb9e74e58712ce4884170bc442b1831f67dc02b479d82db635dfb8653c",
"0xaf8764ed2ebf6c1a60d657b75f1e5d4462844e7325409d40d0ddbedb2ad83308",
"0xa97eb83ccc74887d0971916fec44e930f8561aa838431eb90ed646551823fcf1",
"0xe706bc0fa8c4fac6bb9ab51160832a92a90b27f238b077d68ddd3f5a02cdbcff",
"0x5f82d205df76db9a34b872e5b0f311d5168c641bfb8e38d0433e7b60af85138b",
"0xb2bb4f540b2c6d5f8333ece83987a4c74449400e182c44270e1b8132d4ab57a8",
"0xb95728c6be405e4aa1288f49196eaffc8a5a3449f42b4e6ff199b6ca68904dae"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
