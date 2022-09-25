const { ethers } = require("hardhat");

let contract;

it('deploy', async () => {

  // const Contract = await ethers.getContractFactory('PoolFactory');
  // contract = await Contract.deploy();
  // await contract.deployed();
  // console.log('addr',contract.address);

  const myContract = await ethers.getContractAt('PoolFactory', '0x5FbDB2315678afecb367f032d93F642f64180aa3');
  contract = myContract;
})

// it('create pool', async () => {
//   // usdt and 
//   await contract.createPool('0x5D34b0f3D66259a619EE839B741A2BEe566875c6','0x5624aDE2d81081f6c989A4Dcb6B02c2ED9879983');
//   console.log('pool created');
//   console.log('Pools',await contract.getPools());
//   console.log('lp token addr', await contract.getLPTokenAddress())
// })

it('add liquidity', async() => {


  const poolContract = await ethers.getContractAt('Pool', '0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968');
  console.log('pool contract', poolContract);

  const res = await poolContract.addLiquidity(

    '0x5D34b0f3D66259a619EE839B741A2BEe566875c6',
    '0x9499298953285463afd2Eb2Ec1Ed0C65d700D960',

    '1000', '1000',
    {value: ethers.utils.parseEther("1.0")}
  )
  console.log('res', res)
})