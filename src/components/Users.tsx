import { FC, useMemo, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

interface Order {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: "Completed" | "Pending" | "Shipped" | "Cancelled";
}

const ordersData: Order[] = [
  {
    id: "#1001",
    customer: "Rahul Sharma",
    product: "Laptop",
    amount: 1200,
    status: "Completed",
  },
  {
    id: "#1002",
    customer: "Ananya Reddy",
    product: "Wireless Headphones",
    amount: 180,
    status: "Pending",
  },
  {
    id: "#1003",
    customer: "Priya Singh",
    product: "Monitor",
    amount: 450,
    status: "Shipped",
  },
  {
    id: "#1004",
    customer: "Arjun Kumar",
    product: "Smartphone",
    amount: 899,
    status: "Completed",
  },
  {
    id: "#1005",
    customer: "Sneha Patel",
    product: "Running Shoes",
    amount: 120,
    status: "Cancelled",
  },
  {
    id: "#1006",
    customer: "Vikram Rao",
    product: "Keyboard",
    amount: 75,
    status: "Completed",
  },
  {
    id: "#1007",
    customer: "Meera Das",
    product: "Smart Watch",
    amount: 250,
    status: "Shipped",
  },
  {
    id: "#1008",
    customer: "Kiran Reddy",
    product: "Coffee Maker",
    amount: 140,
    status: "Pending",
  },
  {
    id: "#1009",
    customer: "Neha Gupta",
    product: "Tablet",
    amount: 520,
    status: "Completed",
  },
  {
    id: "#1010",
    customer: "Aditya Verma",
    product: "Bluetooth Speaker",
    amount: 95,
    status: "Shipped",
  },
  {
    id: "#1011",
    customer: "Pooja Nair",
    product: "Backpack",
    amount: 65,
    status: "Pending",
  },
  {
    id: "#1012",
    customer: "Rohit Mehta",
    product: "Gaming Mouse",
    amount: 85,
    status: "Completed",
  },
];

const PAGE_LIMIT = 6;

const Users: FC = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currPage, setCurrPage] = useState(0);

  const filteredOrders = useMemo(() => {
    return ordersData.filter((order) => {
      const matchesSearch =
        order.customer.toLowerCase().includes(search.toLowerCase()) ||
        order.product.toLowerCase().includes(search.toLowerCase()) ||
        order.id.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || order.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const pages = Math.ceil(filteredOrders.length / PAGE_LIMIT);

  const startIndex = currPage * PAGE_LIMIT;
  const currOrders = filteredOrders.slice(
    startIndex,
    startIndex + PAGE_LIMIT
  );

  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrPage(0);
  };

  const handleStatusChange = (value: string) => {
    setStatusFilter(value);
    setCurrPage(0);
  };

  return (
    <div className="hidden md:block pt-5 pb-5 px-5 bg-white/80 backdrop-blur-lg rounded-xl border border-cyan-300 shadow-md w-[95%] max-w-5xl mx-auto">
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">
          Recent Orders
        </h3>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Search orders..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-cyan-500"
          />

          <select
            value={statusFilter}
            onChange={(e) => handleStatusChange(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-cyan-500"
          >
            <option value="All">All Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Shipped">Shipped</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table className="w-full border">
          <TableHead>
            <TableRow className="bg-gray-100">
              <TableCell className="font-semibold text-gray-700">
                Order ID
              </TableCell>

              <TableCell className="font-semibold text-gray-700">
                Customer
              </TableCell>

              <TableCell className="font-semibold text-gray-700">
                Product
              </TableCell>

              <TableCell className="font-semibold text-gray-700">
                Amount
              </TableCell>

              <TableCell className="font-semibold text-gray-700">
                Status
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {currOrders.map((order, index) => (
              <TableRow
                key={order.id}
                className={`transition hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <TableCell className="py-3 font-semibold">
                  {order.id}
                </TableCell>

                <TableCell className="py-3">
                  {order.customer}
                </TableCell>

                <TableCell className="py-3">
                  {order.product}
                </TableCell>

                <TableCell className="py-3 font-semibold">
                  ${order.amount.toLocaleString()}
                </TableCell>

                <TableCell className="py-3">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-md ${
                      order.status === "Completed"
                        ? "text-green-600 bg-green-100"
                        : order.status === "Pending"
                        ? "text-yellow-600 bg-yellow-100"
                        : order.status === "Shipped"
                        ? "text-blue-600 bg-blue-100"
                        : "text-red-600 bg-red-100"
                    }`}
                  >
                    {order.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}

            {currOrders.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center py-8 text-gray-500"
                >
                  No orders found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {pages > 0 && (
        <div className="flex justify-end mt-4">
          {Array.from({ length: pages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrPage(index)}
              className={`border border-gray-300 rounded-md mx-1 px-3 py-1 ${
                currPage === index
                  ? "bg-cyan-100 text-cyan-700"
                  : "bg-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;