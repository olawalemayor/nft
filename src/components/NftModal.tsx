import React from "react";
import { OpenSeaCollectionMetadata, OwnedNft } from "alchemy-sdk";

interface IModalProps {
  item: OwnedNft;
}

export default function NftModal({ item }: IModalProps) {
  const openSeaContract = item.contract.openSea as OpenSeaCollectionMetadata;
  const balance = item.balance;

  const {
    collectionName,
    description,
    discordUrl,
    externalUrl,
    floorPrice,
    lastIngestedAt,
    safelistRequestStatus,
    twitterUsername,
  } = openSeaContract;

  return (
    <div className="text-gray-800 font-light h-full">
      {collectionName && (
        <div className="mb-3 flex flex-col">
          <span className="font-bold text-blue-700">Collection</span>
          <span className="italic">{collectionName}</span>
        </div>
      )}

      {description && (
        <div className="flex flex-col">
          <span className="font-bold text-blue-700">Description</span>
          <span className="max-w-md mx-auto">{description}</span>
        </div>
      )}

      {!!balance && (
        <div className="my-3 flex flex-col">
          <span className="font-bold text-blue-700 ">Remaining balance</span>
          <span className="font-mono text3xl">{balance}</span>
        </div>
      )}

      {lastIngestedAt && (
        <div className="my-3 flex flex-col">
          <span className="font-bold text-blue-700">Last Ingested</span>
          {new Date(lastIngestedAt).toUTCString()}
        </div>
      )}

      {discordUrl && (
        <div className="my-3 flex flex-col">
          <span className="font-bold text-blue-700">Discord</span>
          <a
            href={discordUrl}
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            {discordUrl}
          </a>
        </div>
      )}

      {twitterUsername && (
        <div className="my-3 flex flex-col">
          <span className="font-bold text-blue-700">Twitter</span>
          <a
            href={"http://twitter.com/" + twitterUsername}
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            @{twitterUsername}
          </a>
        </div>
      )}

      {safelistRequestStatus && (
        <div className="my-3 flex flex-col">
          <span className="font-bold text-blue-700">
            Safelist request status
          </span>
          {safelistRequestStatus}
        </div>
      )}

      {!!floorPrice && (
        <div className="my-3 flex flex-col">
          <span className="font-bold text-blue-700">Floor Price</span>
          {floorPrice}
        </div>
      )}

      <div className="flex justify-center">
        <a
          href={externalUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-green-700 px-5 py-2 text-white rounded-lg"
        >
          Buy
        </a>
      </div>
    </div>
  );
}
