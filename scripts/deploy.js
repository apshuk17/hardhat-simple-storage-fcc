const { ethers, run, network } = require("hardhat");
require("dotenv").config();

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY.toString().trim();

const main = async () => {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying the smart contract....");

  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();
  console.log('##Contract Address', simpleStorage.address);

  if (network.config.chainId === 4 && ETHERSCAN_API_KEY) {
    console.log('##Waiting for the confirmations...');
    await simpleStorage.deployTransaction.wait(6);
    await verify(simpleStorage.address, []);
  }

  let favoriteNumber = await simpleStorage.retrieve();
  console.log('##Initial fav', favoriteNumber.toString());

  // Update the current values
  const txResponse = await simpleStorage.store(7);
  await txResponse.wait(1);
  favoriteNumber = await simpleStorage.retrieve();
  console.log('##Updated fav', favoriteNumber.toString());
};

const verify = async (contractAddr, args) => {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddr,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes('already verified')) {
      console.log('Already Verified');
    } else {
      console.error(e);
    }
  }
};

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
