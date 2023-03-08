import React, { useState } from "react";
import "./App.css";
import NftList from "./components/NftList";
import NftModal from "./components/NftModal";
import { OwnedNft } from "alchemy-sdk";

function App() {
  const [selectedNFT, setSelectedNFT] = useState<OwnedNft | null>(null);
  return (
    <div className="text-center h-screen max-h-screen overflow-hidden relative flex items-center justify-center">
      <NftList setSelectedNFT={setSelectedNFT} />

      {selectedNFT && (
        <div className="absolute top-0 left-0 w-full min-h-full max-h-full overflow-y-auto z-50 bg-slate-600/80">
          <div className="h-full w-full relative flex items-center justify-center px-2">
            {/* Click on empty space closes the modal */}
            <div
              className="absolute z-30 w-full h-full"
              onClick={(e) => setSelectedNFT(null)}
            ></div>
            <div className="bg-white w-full max-w-xl mx-auto rounded-lg p-2 z-50 my-16">
              <div className="flex justify-end">
                <button
                  onClick={(e) => setSelectedNFT(null)}
                  className="text-black font-bold text-2xl"
                >
                  x
                </button>
              </div>
              <NftModal item={selectedNFT} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
