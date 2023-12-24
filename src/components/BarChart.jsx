import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container mt-3">
      <Bar
        data={chartData}
        options={{
          responsive: true,
          indexAxis: "y",
          plugins: {
            legend: {
              display: false,
            },
          },

          scales: {
            x: {
              display: false,
              grid: {
                display: false,
              },
            },
            y: {
              ticks: {
                color: "black",
                font: {
                    family: 'Inter',
                },
              }, 
              suggestedMin: 0,
              suggestedMax: 300,
              border: {
                display: false,
              },
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
