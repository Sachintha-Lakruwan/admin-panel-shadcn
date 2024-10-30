"use client";

import React, { useEffect, useState } from "react";
import RevenueCard from "./RevenueCard";
import { RevenueCardProps } from "./RevenueCard";

const data: RevenueCardProps[] = [
  {
    model: "Boeing 747",
    revenue: 100000,
  },
  {
    model: "Boeing 737",
    revenue: 200000,
  },
  {
    model: "Airbus A380",
    revenue: 300000,
  },
  {
    model: "Airbus A320",
    revenue: 400000,
  },
  {
    model: "Boeing 747",
    revenue: 100000,
  },
  {
    model: "Boeing 737",
    revenue: 200000,
  },
  {
    model: "Airbus A380",
    revenue: 300000,
  },
  {
    model: "Airbus A320",
    revenue: 400000,
  },
  {
    model: "Boeing 747",
    revenue: 100000,
  },
  {
    model: "Boeing 737",
    revenue: 200000,
  },
  {
    model: "Airbus A380",
    revenue: 300000,
  },
  {
    model: "Airbus A320",
    revenue: 400000,
  },
];

export default function Page() {
  const [revenueDetals, setRevenueDetails] = useState<RevenueCardProps[]>(data);

  async function fetchRevenueDetails() {
    setRevenueDetails(data);
  }

  useEffect(() => {
    fetchRevenueDetails();
  }, []);

  return (
    <div className=" p-8 h-full overflow-scroll grid grid-cols-4 gap-6 overflow-x-hidden">
      {revenueDetals.map((i) => (
        <RevenueCard
          key={crypto.randomUUID()}
          model={i.model}
          revenue={i.revenue}
        />
      ))}
    </div>
  );
}
