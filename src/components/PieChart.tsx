import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart: React.FC = () => {
  const chartData = {
    labels: [
      "Electronics",
      "Clothing",
      "Home & Kitchen",
      "Beauty",
      "Sports",
    ],

    datasets: [
      {
        label: "Sales by Category",
        data: [35, 25, 18, 12, 10],
        backgroundColor: [
          "rgba(6, 182, 212, 0.7)",
          "rgba(59, 130, 246, 0.7)",
          "rgba(168, 85, 247, 0.7)",
          "rgba(236, 72, 153, 0.7)",
          "rgba(34, 197, 94, 0.7)",
        ],
        borderColor: [
          "rgba(6, 182, 212, 1)",
          "rgba(59, 130, 246, 1)",
          "rgba(168, 85, 247, 1)",
          "rgba(236, 72, 153, 1)",
          "rgba(34, 197, 94, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,

    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,

        labels: {
          font: {
            size: 11,
          },
          color: "#333",
          padding: 10,
        },
      },

      tooltip: {
        enabled: true,

        callbacks: {
          label: (context: any) => {
            return ` ${context.label}: ${context.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div className="p-5 bg-white shadow-md rounded-xl border border-cyan-300 my-5 w-[380px] h-[380px]">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">
        Sales by Category
      </h2>

      <Pie data={chartData} options={options} />
    </div>
  );
};