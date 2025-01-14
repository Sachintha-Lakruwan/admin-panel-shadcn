"use client";

import React, { useEffect, useState } from "react";
import RevenueCard from "./RevenueCard";
import { RevenueCardProps } from "./RevenueCard";

// const data: RevenueCardProps[] = [
//   {
//     name: "Boeing 737",
//     revenue: 0,
//   },
//   {
//     name: "Airbus A380",
//     revenue: 0,
//   },
//   {
//     name : "Boeing 757",
//     revenue : 0
//   }
// ];

export default function Page() {
  const [revenueDetals, setRevenueDetails] = useState<
    RevenueCardProps[] | null
  >(null);

  async function fetchRevenueDetails() {
    const res = await fetch(`/api/revenue`);
    const data = await res.json();
    setRevenueDetails(data);
  }

  useEffect(() => {
    fetchRevenueDetails();
  }, []);

  return (
    <div className=" p-8 h-full overflow-scroll grid grid-cols-4 gap-6 overflow-x-hidden">
      {revenueDetals &&
        revenueDetals.map((i) => (
          <RevenueCard
            key={crypto.randomUUID()}
            name={i.name}
            revenue={i.revenue}
          />
        ))}
    </div>
  );
}
