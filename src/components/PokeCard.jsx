import React, { useState } from "react";
import StatCard from "./StatCard";

export default function HoverablePokeCard({ name, color, id, types, stats }) {
  const typesOfPokemon = [];
  for (let type of types) {
    typesOfPokemon.push(type.type.name);
  }

  const [isClicked, setIsClicked] = useState(false);

  const toggleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      {isClicked ? (
        <div onClick={toggleClick} className="hover:cursor-pointer">
          <StatCard name={name} id={id} stats={stats} 
        />
        </div>
      ) : (
        <div
          onClick={toggleClick}
          style={{
            backgroundImage: `linear-gradient(to bottom right, ${color} , dimgrey`,
          }}
          className={`h-56 hover:cursor-pointer w-96 lg:h-60 rounded-3xl p-4 flex justify-between shadow-2xl mb-10`}
        >
          <div className="flex flex-col justify-between mb-4">
            <h1 className="mt-4 text-white font-bold text-4xl">{name}</h1>
            <div className="flex flex-col space-y-2">
              {typesOfPokemon.map((type) => (
                <div key={type} className="bg-black bg-opacity-10 shadow-2xl shadow-white w-20 h-8 rounded-full">
                  <p className="overflow-ellipsis overflow-clip p-1 text-center text-white font-bold">
                    {type}
                  </p>
                </div>
              ))}
              
            </div>
          </div>
          <div>
            <p className="text-3xl opacity-30 text-white text-right">#{id}</p>
            <img
              src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
              className="h-36 mb-3"
            />
            <p className="text-[8px] opacity-50 text-white font-light">Tap anywhere to show stats</p>
          </div>
        </div>
      )}
    </>
  );
}
