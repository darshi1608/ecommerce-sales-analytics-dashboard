import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

interface LineChartProps {
  period: "7D" | "30D" | "90D" | "1Y";
}

const revenueData = {
  "7D": {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data: [550, 780, 700, 900, 1100, 850, 920],
  },

  "30D": {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    data: [5200, 6100, 5700, 7800],
  },

  "90D": {
    labels: ["Month 1", "Month 2", "Month 3"],
    data: [18500, 21400, 28500],
  },

  "1Y": {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],

    data: [
      13200,
      16000,
      14600,
      18500,
      20000,
      21500,
      19600,
      23600,
      24900,
      23000,
      26300,
      27400,
    ],
  },
};

export const LineChart: React.FC<LineChartProps> = ({
  period,
}) => {
  const currentData = revenueData[period];

  const chartData = {
    labels: currentData.labels,

    datasets: [
      {
        label: "Revenue ($)",
        data: currentData.data,
        fill: false,
        backgroundColor: "rgba(6, 182, 212, 0.4)",
        borderColor: "rgba(6, 182, 212, 1)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: true,

        labels: {
          font: {
            size: 12,
          },
          color: "#333",
        },
      },

      tooltip: {
        enabled: true,

        callbacks: {
          label: (context: any) => {
            return ` Revenue: $${context.raw.toLocaleString()}`;
          },
        },
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },

        ticks: {
          color: "#666",
        },
      },

      y: {
        beginAtZero: true,

        grid: {
          display: false,
        },

        ticks: {
          color: "#666",

          callback: (value: any) => {
            if (value >= 1000) {
              return `$${(value / 1000).toFixed(0)}k`;
            }

            return `$${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="m-5 py-4 px-3 bg-white shadow-md hidden md:block rounded-xl border border-cyan-300 w-[600px]">
      <h2 className="text-lg font-semibold text-gray-700 px-3 mb-2">
        Revenue Trend
      </h2>

      <Line
        data={chartData}
        options={options}
      />
    </div>
  );
};