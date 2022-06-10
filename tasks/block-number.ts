import { task } from 'hardhat/config';

export default task("block-number", "Prints the block number").setAction(
    async (taskArgs, hre) => {
        const { ethers } = hre;
        const blockNumber = await ethers.provider.getBlockNumber();
        console.log(`Current block number`, blockNumber);
    }
);