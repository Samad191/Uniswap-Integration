const hre = require('hardhat');
require("@nomiclabs/hardhat-etherscan");

async function main() {
    await hre.run('verify:verify', {
        address: 'address',
        // constructorArguments: [
        //     "hello world!"
        // ]
    })
}

main()
    .then(() => process.exit(0));
    .catch(err => console.log(err); process.exit(1))
    // 0x74091Ad5406141903F4Ed02b037A609a17eE66E1

     