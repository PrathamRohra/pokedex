import React, { useState } from "react";
import BarChart from "./BarChart";

export default function StatCard({ name, id, stats }) {
  const determineColor = (value) => {
    if (value <= 50) {
      return "red"; // Very less -> Red
    } else if (value > 50 && value <= 75) {
      return "#f1b644"; // Medium -> Yellow
    } else if (value > 75 && value <= 100) {
      return "orange"; // Above medium -> Orange
    } else {
      return "#6fa457"; // Good ->Green
    }
  };

  const [chartData, setChartData] = useState({
    labels: stats?.map((stat) => `${stat.stat.name}   ${stat.base_stat}`),
    datasets: [
      {
        data: stats?.map((stat) => stat.base_stat),
        backgroundColor: stats?.map((stat) => determineColor(stat.base_stat)),
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  });

  return (
    <div
      className={`pl-4 w-96 h-56 lg:h-60 rounded-3xl p-2 flex justify-between mb-10 outline outline-gray-300`}
    >
      <div className="flex flex-col justify-between mb-4">
        <h1 className="mt-4 font-bold text-xl">stats</h1>
        <BarChart chartData={chartData} />
      </div>
      <div>
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
          className="h-16"
        />
        <p className="text-[8px] font-light">Tap anywhere to show card</p>
      </div>
    </div>
  );
}
