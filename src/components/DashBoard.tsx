import { useState } from "react";
import Card from "./Card";
import { LineChart } from "./LineChart";
import { PieChart } from "./PieChart";
import { Insights } from "./Insights";
import {
  People as UsersIcon,
  ShoppingCart as OrdersIcon,
  AttachMoney as EarningsIcon,
  AccountBalanceWallet as BalanceIcon,
} from "@mui/icons-material";
import Users from "./Users";

type TimePeriod = "7D" | "30D" | "90D" | "1Y";

export const DashBoard = () => {
  const [timePeriod, setTimePeriod] =
    useState<TimePeriod>("30D");

  const dashboardData = {
    "7D": {
      revenue: "$5.8k",
      orders: 184,
      customers: 265,
      averageOrder: "$31.5",
      revenueChange: "+8%",
      ordersChange: "+5%",
      customersChange: "+7%",
      averageChange: "+3%",
    },

    "30D": {
      revenue: "$24.8k",
      orders: 856,
      customers: 1240,
      averageOrder: "$29.0",
      revenueChange: "+12%",
      ordersChange: "+8%",
      customersChange: "+15%",
      averageChange: "+6%",
    },

    "90D": {
      revenue: "$68.4k",
      orders: 2380,
      customers: 3420,
      averageOrder: "$28.7",
      revenueChange: "+18%",
      ordersChange: "+13%",
      customersChange: "+20%",
      averageChange: "+9%",
    },

    "1Y": {
      revenue: "$248.6k",
      orders: 8650,
      customers: 12480,
      averageOrder: "$28.7",
      revenueChange: "+24%",
      ordersChange: "+19%",
      customersChange: "+27%",
      averageChange: "+11%",
    },
  };

  const currentData = dashboardData[timePeriod];

  const data = [
    {
      id: 1,
      title: "TOTAL REVENUE",
      value: currentData.revenue,
      change: currentData.revenueChange,
      icon: (
        <EarningsIcon
          fontSize="medium"
          className="text-cyan-500"
        />
      ),
      cta: "View revenue",
      ctaLink: "#",
    },

    {
      id: 2,
      title: "TOTAL ORDERS",
      value: currentData.orders,
      change: currentData.ordersChange,
      icon: (
        <OrdersIcon
          fontSize="medium"
          className="text-cyan-500"
        />
      ),
      cta: "View orders",
      ctaLink: "#",
    },

    {
      id: 3,
      title: "CUSTOMERS",
      value: currentData.customers,
      change: currentData.customersChange,
      icon: (
        <UsersIcon
          fontSize="medium"
          className="text-cyan-500"
        />
      ),
      cta: "View customers",
      ctaLink: "#",
    },

    {
      id: 4,
      title: "AVG. ORDER VALUE",
      value: currentData.averageOrder,
      change: currentData.averageChange,
      icon: (
        <BalanceIcon
          fontSize="medium"
          className="text-cyan-500"
        />
      ),
      cta: "View details",
      ctaLink: "#",
    },
  ];

  return (
    <div className="bg-cyan-50 w-full min-h-screen flex flex-col p-5">

      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Sales Dashboard
          </h1>

          <p className="text-sm text-gray-500">
            Monitor your e-commerce performance
          </p>
        </div>

        {/* Period Filter */}
        <div className="flex items-center gap-2 mt-3 md:mt-0">
          <span className="text-sm font-medium text-gray-600">
            Period:
          </span>

          <select
            value={timePeriod}
            onChange={(e) =>
              setTimePeriod(e.target.value as TimePeriod)
            }
            className="bg-white border border-cyan-300 rounded-lg px-3 py-2 text-sm text-gray-700 shadow-sm outline-none focus:ring-2 focus:ring-cyan-300"
          >
            <option value="7D">Last 7 Days</option>
            <option value="30D">Last 30 Days</option>
            <option value="90D">Last 90 Days</option>
            <option value="1Y">Last 1 Year</option>
          </select>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="flex flex-wrap justify-center">
        {data.map((item) => (
          <Card
            key={item.id}
            {...item}
          />
        ))}
      </div>

      {/* Charts */}
      <div className="flex flex-row justify-center flex-wrap">
        <div className="mx-1">
          <LineChart period={timePeriod} />
        </div>

        <div className="mx-1">
          <PieChart />
        </div>
      </div>

      {/* Performance Insights */}
      <Insights
        period={timePeriod}
        revenue={currentData.revenue}
        orders={currentData.orders}
        customers={currentData.customers}
        averageOrder={currentData.averageOrder}
        revenueChange={currentData.revenueChange}
        ordersChange={currentData.ordersChange}
        customersChange={currentData.customersChange}
      />

      {/* Recent Orders */}
      <div>
        <Users />
      </div>

    </div>
  );
};