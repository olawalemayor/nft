import React from "react";
import { OpenSeaCollectionMetadata, OwnedNft } from "alchemy-sdk";
import placeHolderImage from "../assets/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg";

interface NFTCardProps {
  item: OwnedNft;
  setSelectedNFT: (value: React.SetStateAction<OwnedNft | null>) => void;
}

export default function NftCard({ item, setSelectedNFT }: NFTCardProps) {
  const openSeaContract = item.contract.openSea;

  let { imageUrl, collectionName, twitterUsername } =
    openSeaContract as OpenSeaCollectionMetadata;

  return (
    <div
      className={`relative p-2 border border-gray-600 flex flex-col justify-between h-full hover:border-gray-300`}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          title={collectionName}
          alt={collectionName}
          className="w-full"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = placeHolderImage;
          }}
        />
      )}

      {!imageUrl && (
        <img
          src={placeHolderImage}
          title={collectionName}
          alt={collectionName}
          className="w-full"
        />
      )}

      <span className="block">{collectionName}</span>

      {twitterUsername && (
        <span className="block">
          Twitter :{" "}
          <a
            href={"http://twitter.com/" + twitterUsername}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600"
          >
            @{twitterUsername}
          </a>
        </span>
      )}

      <button
        className="block w-full py-1 bg-green-700 hover:bg-green-600 text-white"
        onClick={(e) => setSelectedNFT(item)}
      >
        More
      </button>
    </div>
  );
}
