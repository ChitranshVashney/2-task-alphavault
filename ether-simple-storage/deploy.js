const ethers = require("ethers");
const fs = require("fs-extra");
const { Conditional } = require("prettier-plugin-solidity/src/nodes");
require("dotenv").config();
async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  const wallet = new ethers.Wallet(process.env.Private_key, provider);
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin","utf8");
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("please wait");
  const contract = await contractFactory.deploy();
  const deploymentReciept= await contract.deployTransaction.wait(1);

  console.log("......................................................................................");
  console.log(contract.deployTransaction);
  console.log("???????????????????????????????????????????????????????????????????????????????????????");
  console.log(deploymentReciept);

}

main()
  .then(() => ProcessingInstruction.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
