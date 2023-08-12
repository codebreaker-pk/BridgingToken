const { ethers } = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/SpaceExplorersNFT.sol/SpaceExplorersNFT.json");

// const tokenAddress = "0x35c47E445447548b2a301F16bB7f138B4aD0e502"; 
const tokenAddress = "0xA30B1a5fFef6644C6343b0f318Ab3900CFb713b6"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xBC14D5E5d24c6A8201FD2D16084C654bF49ea3FD";

async function main() { 

  const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const tokenProvider = new ethers.providers.JsonRpcProvider();
  

  const etherProvider = new ethers.providers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/mQEI4efchx5bKM15DZmdDuNgIWaffADN");
  const balanceWei = await etherProvider.getBalance(walletAddress);
  const balanceEther = ethers.utils.formatEther(balanceWei);

  const tokenBalance = await token.balanceOf(walletAddress);

  console.log(`Balance of address ${walletAddress}: ${balanceEther} ETH`);
  console.log(`Token balance of address ${walletAddress}: ${tokenBalance.toString()} tokens`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });





   
