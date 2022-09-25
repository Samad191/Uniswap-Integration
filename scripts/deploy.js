
async function main() {
  console.log(1)
  // We get the contract to deploy
  const Greeter = await ethers.getContractFactory("TestAddLiquidity");
  console.log(2)
  const greeter = await Greeter.deploy();
  console.log(3)
  // await greeter.deployed();
  greeter.deployed().then(res => console.log('res', res))
  console.log(4)
  console.log("Greeter deployed to:", greeter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });