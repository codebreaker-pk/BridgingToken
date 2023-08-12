
// This script mints SpaceExplorersNFT tokens individually.

// Import required libraries
const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  // Get private key from env
  const privateKey = process.env.PRIVATE_KEY;

  // The URL of the network provider
  const networkAddress =
    "https://eth-goerli.g.alchemy.com/v2/mQEI4efchx5bKM15DZmdDuNgIWaffADN";

  // Create a provider using the URL
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  // Create a signer from the private key and provider
  const signer = new ethers.Wallet(privateKey, provider);

  // The address of the deployed contract
  const contractAddress = "0x35c47E445447548b2a301F16bB7f138B4aD0e502";

  // Get the contract factory and attach it to the signer
  const SpaceExplorersNFT = await ethers.getContractFactory("SpaceExplorersNFT", signer);
  const contract = await SpaceExplorersNFT.attach(contractAddress);

  // Mint tokens individually
  const numTokensToMint = 5; // Adjust the number of tokens to mint
  const gasLimit = 2000000; // Set a fixed gas limit for transactions

  for (let i = 0; i < numTokensToMint; i++) {
    const tokenId = i; // Using the loop counter as the tokenId
    await contract.mint(signer.address, tokenId, { gasLimit }); // Specify gas limit
    console.log(`Minted token ${tokenId}`);
  }

  console.log(`Minted ${numTokensToMint} tokens in total`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });



