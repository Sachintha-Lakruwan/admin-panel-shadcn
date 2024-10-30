"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { UserDatePicker } from "../passenger_count_by_destination/PickADate";
import { StatTable } from "./StatTable";
import { TableRow } from "./StatTable";

const data: TableRow[] = [
  {
    flight_name: "Flight 101",
    date: "2024-11-01",
    states: "On Time",
    passenger_count: 150,
  },
  {
    flight_name: "Flight 202",
    date: "2024-11-02",
    states: "Delayed",
    passenger_count: 120,
  },
  {
    flight_name: "Flight 303",
    date: "2024-11-03",
    states: "Cancelled",
    passenger_count: 0,
  },
  {
    flight_name: "Flight 404",
    date: "2024-11-04",
    states: "On Time",
    passenger_count: 180,
  },
  {
    flight_name: "Flight 505",
    date: "2024-11-05",
    states: "On Time",
    passenger_count: 160,
  },
];

export default function Page() {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [tableData, setTableData] = useState<TableRow[]>(data);

  async function fetchData() {
    console.log(startDate, endDate);
    setTableData(data);
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
      <div className=" w-full px-20">
        <StatTable data={tableData} />
      </div>
    </div>
  );
}
