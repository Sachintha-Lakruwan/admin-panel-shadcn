"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { UserDatePicker } from "../passenger_count_by_destination/PickADate";
import { StatTable } from "./StatTable";

export default function Page() {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  async function fetchData() {
    console.log(startDate, endDate);
  }
  return (
    <div className=" w-full h-[90%] p-6 flex flex-col items-center gap-8">
      <form action={fetchData}>
        <div className="flex gap-6 mt-8">
          <UserDatePicker
            date={startDate}
            setDate={setStartDate}
            label="Starting Date"
          />
          <UserDatePicker
            date={endDate}
            setDate={setEndDate}
            label="Ending Date"
          />
        </div>
        <div>
          <Button className=" w-full mt-6" onClick={fetchData}>
            Search
          </Button>
        </div>
      </form>
      <StatTable />
    </div>
  );
}
