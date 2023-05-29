// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const [deployer] = await ethers.getSigners();

  console.log(
  "Deploying contracts with the account:",
  deployer.address
  );
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const CardDB = await ethers.getContractFactory("CardDB");
  const TCGtoken = await ethers.getContractFactory("TCGtoken");
  const cardContract = await CardDB.deploy();
  const tokenContract = await TCGtoken.deploy();

  console.log("Card Contract deployed at:", cardContract.address);
  console.log("Token Contract deployed at:", tokenContract.address);
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });