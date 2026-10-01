import React from "react";

interface InsightsProps {
  period: "7D" | "30D" | "90D" | "1Y";
  revenue: string;
  orders: number;
  customers: number;
  averageOrder: string;
  revenueChange: string;
  ordersChange: string;
  customersChange: string;
}

const periodLabels = {
  "7D": "the last 7 days",
  "30D": "the last 30 days",
  "90D": "the last 90 days",
  "1Y": "the last year",
};

export const Insights: React.FC<InsightsProps> = ({
  period,
  revenue,
  orders,
  customers,
  averageOrder,
  revenueChange,
  ordersChange,
  customersChange,
}) => {
  return (
    <div className="w-[95%] max-w-5xl mx-auto my-5 bg-white rounded-xl border border-cyan-300 shadow-md p-5">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-gray-800">
          Performance Insights
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Key observations for {periodLabels[period]}.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Revenue Insight */}
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">📈</span>

            <h3 className="font-semibold text-gray-800">
              Revenue
            </h3>
          </div>

          <p className="text-sm text-gray-600">
            Revenue reached{" "}
            <span className="font-semibold text-gray-900">
              {revenue}
            </span>{" "}
            during {periodLabels[period]}, representing a{" "}
            <span className="font-semibold text-green-600">
              {revenueChange}
            </span>{" "}
            change.
          </p>
        </div>

        {/* Orders Insight */}
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">🛒</span>

            <h3 className="font-semibold text-gray-800">
              Orders
            </h3>
          </div>

          <p className="text-sm text-gray-600">
            A total of{" "}
            <span className="font-semibold text-gray-900">
              {orders.toLocaleString()}
            </span>{" "}
            orders were recorded, with an average order
            value of{" "}
            <span className="font-semibold text-gray-900">
              {averageOrder}
            </span>
            .
          </p>

          <p className="text-xs text-green-600 mt-2 font-medium">
            Orders changed by {ordersChange}.
          </p>
        </div>

        {/* Customer Insight */}
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">👥</span>

            <h3 className="font-semibold text-gray-800">
              Customers
            </h3>
          </div>

          <p className="text-sm text-gray-600">
            The dashboard recorded{" "}
            <span className="font-semibold text-gray-900">
              {customers.toLocaleString()}
            </span>{" "}
            customers during the selected period.
          </p>

          <p className="text-xs text-green-600 mt-2 font-medium">
            Customer count changed by {customersChange}.
          </p>
        </div>

        {/* Category Insight */}
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">🏆</span>

            <h3 className="font-semibold text-gray-800">
              Top Category
            </h3>
          </div>

          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">
              Electronics
            </span>{" "}
            represents the largest share of sales in the
            current category breakdown.
          </p>

          <p className="text-xs text-gray-500 mt-2">
            Category share: 35%
          </p>
        </div>

      </div>
    </div>
  );
};