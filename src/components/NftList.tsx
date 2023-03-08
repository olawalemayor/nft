import React, { useState } from "react";
import NftCard from "./NftCard";
import { getNftsByAddress } from "../services/nft.service";
import { OwnedNft } from "alchemy-sdk";

interface IListProp {
  setSelectedNFT: (value: React.SetStateAction<OwnedNft | null>) => void;
}

export default function NftList({ setSelectedNFT }: IListProp) {
  const [address, setAddress] = useState<string>("");
  const [nftList, setNftList] = useState<OwnedNft[]>([]);
  const [nftCount, setNftCount] = useState<number>();
  const [errorMessage, setErrorMessage] = useState<string | null>();

  const handleNFTCheck = async () => {
    if (!address.length) return;

    try {
      const { ownedNfts, totalCount } = await getNftsByAddress(address);

      setNftCount(totalCount);
      setNftList(ownedNfts);
      setErrorMessage(null);
    } catch (error: any) {
      setErrorMessage(error.message || error);
    }
  };

  return (
    <div className="h-full overflow-y-auto w-full ">
      <div className="md:sticky md:top-0 md:bg-gray-800 z-50 shadow-lg pb-3 mt-4 w-full">
        <h1 className="text-7xl font-sans">NFT LIST</h1>

        <span className="text-3xl flex flex-col sm:flex-row justify-center items-center gap-4 my-2 p-2">
          <span>
            Address <span className="hidden sm:inline">{" : "}</span>
          </span>
          <input
            type="text"
            className="px-2 py-1 rounded-lg bg-white outline-none text-gray-900 w-full sm:w-auto"
            onChange={(e) => setAddress(e.currentTarget.value)}
          />

          <button
            className="px-5 py-2 bg-blue-700 hover:bg-blue-600 text-white text-lg rounded-lg"
            onClick={handleNFTCheck}
          >
            Check
          </button>
        </span>

        {errorMessage && (
          <span className="my-2 text-red-700 text-sm">{errorMessage}</span>
        )}
      </div>

      {!!nftCount && (
        <div className="bg-gray-700">
          <div className="py-5 text-xl">
            Total NFTs : <span className="font-bold">{nftCount}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl px-2 sm:px-0 mx-auto py-5">
            {nftList.map((item, index) => {
              return (
                <NftCard
                  item={item}
                  key={index}
                  setSelectedNFT={setSelectedNFT}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
