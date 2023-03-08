import { Alchemy, AlchemySettings, Network } from "alchemy-sdk";

const apiKey = process.env.REACT_APP_NFT_API_KEY;

const config: AlchemySettings = {
  apiKey,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

export const getNftsByAddress = async (owner: string) =>
  await alchemy.nft.getNftsForOwner(owner);
