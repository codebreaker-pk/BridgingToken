# Space Explorers NFT Project

This project demonstrates how to mint NFTs using the SpaceExplorersNFT contract and transfer them between Ethereum and Polygon networks using the FxPortal Bridge.

## Prerequisites

- Node.js and npm installed
- Hardhat installed globally: `npm install -g hardhat`
- Metamask wallet with testnet ETH on both Ethereum and Polygon (Mumbai testnet)

## Description
The Space Explorers NFT Project showcases the creation, transfer, and mapping of NFTs between Ethereum and Polygon networks. This repository provides a step-by-step guide to deploy the SpaceExplorersNFT contract, mint NFTs, deposit them onto the FxPortal Bridge, and verify their balance on the Polygon Mumbai testnet. With detailed instructions and sample scripts, you'll learn how to seamlessly navigate the process of managing NFTs across different blockchain networks. This project is perfect for those interested in understanding cross-chain NFT transfers and exploring the capabilities of Ethereum and Polygon networks.

## Key Features:

- Deploy the SpaceExplorersNFT contract on Ethereum's Goerli testnet.
- Mint NFTs to a specified address for testing and demonstration purposes.
- Deposit NFTs onto the FxPortal Bridge for seamless transfer between Ethereum and Polygon.
- Manually map tokens on the FxPortal Mapper contract to enable cross-chain transfers.
- Verify NFT balances on the Polygon Mumbai testnet to confirm successful transfers.
- 
## Setup

1. Clone the repository: `git clone https://github.com/codebreaker-pk/BridgingToken.git`
2. Navigate to the project folder: `cd BridgingToken/SpaceExplorersNFT` 
3. Install dependencies: `npm install`

## Configure Environment Variables

1. Create a `.env` file in the project root directory.
2. Add your Ethereum and Polygon private keys to the `.env` file:   `PRIVATE_KEY=<your_private_key> `

## Deploy and Mint

1. Deploy the `SpaceExplorersNFT` contract on the Goerli testnet: `npx hardhat run scripts/deploy.js --network goerli `
2. Mint NFTs to your address:  `npx hardhat run scripts/mint.js --network goerli`


## Deposit NFTs to Polygon

1. Deposit the NFTs to the FxPortal Bridge:  `npx hardhat run scripts/approvedDeposit.js --network goerli`


## Map Token on FxPortal Mapper (Manual)

1. Manually map the token to the FxPortal Mapper contract on Ethereum.
2. Note down the child address provided by the mapping process.

## Verify NFTs on Polygon

1. Verify the NFTs have been deposited on the Polygon network:  `npx hardhat run scripts/getBalance.js --network mumbai`


## Usage

- The `SpaceExplorersNFT` contract allows minting of NFTs.
- The provided scripts demonstrate transferring NFTs between Ethereum and Polygon using the FxPortal Bridge.

## Author

**Prashant Kumar**

- GitHub: [github.com/codebreaker-pk](https://github.com/codebreaker-pk)
- Email: official.pk.900@gmail.com


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.




