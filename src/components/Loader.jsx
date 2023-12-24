import React from "react";

export default function Loader() {
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom right, black , dimgrey`,
        }}
        className={`w-80 h-56 lg:w-96 lg:h-60 rounded-3xl p-4 flex justify-between shadow-2xl mb-10 animate-pulse`}
      >
        <div className="flex flex-col justify-between mb-4">
        <h1 className="mt-4 text-white font-bold text-3xl lg:text-4xl">A wild pokemon will appear here</h1>
          <div className="flex flex-col space-y-2 animate-pulse mt-5 md:mt-10">
            <div className="bg-black bg-opacity-10 shadow-2xl shadow-white w-20 h-8 rounded-full">
              <p className="overflow-ellipsis overflow-clip p-1 text-center text-white font-bold"></p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-3xl opacity-30 text-white text-right animate-pulse">#X</p>
          <img
            src={`./whothatpokemon.png`}
            className="w-52 mb-3 mt-8"
          />
        </div>
      </div>

    </>
  );
}
