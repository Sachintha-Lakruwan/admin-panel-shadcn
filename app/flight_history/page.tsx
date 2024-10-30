"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { StatTable } from "./StatTable";
import { TableRow } from "./StatTable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Destination {
  label: string;
  key: string;
}

const destinations = [
  {
    label: "Suvarnabhumi Airport",
    key: "BKK",
  },
];

export default function Page() {
  const [departue, setDeparture] = React.useState<string>("");
  const [destination, setDestination] = React.useState<string>("");
  const [tableData, setTableData] = useState<TableRow[] | null>(null);

  const [destinationsList, setDestinationsList] =
    React.useState<Destination[]>(destinations);

  async function fetchDestination() {
    try {
      fetch("/api/airports");
      const destinations = await fetch("/api/airports").then((res) =>
        res.json()
      );
      setDestinationsList(destinations);
    } catch (error) {
      console.error("Error fetching destinations:", error);
    }
  }

  useEffect(() => {
    fetchDestination();
  }, []);

  async function fetchData() {
    const str = `/api/past_flight_data?origin=${departue}&destination=${destination}`;
    try {
      if (!destination || !departue) {
        return;
      }
      const response = await fetch(str).then((res) => res.json());
      console.log(response);
      setTableData(response);
    } catch (error) {
      console.error("Error fetching destinations:", error);
    }
  }
  return (
    <div className=" w-full h-[90%] p-6 flex flex-col items-center gap-8">
      <form action={fetchData}>
        <div className="flex gap-6 mt-8">
          <Select onValueChange={setDeparture}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Destination" />
            </SelectTrigger>
            <SelectContent>
              {destinationsList.map((destination) => (
                <SelectItem key={destination.key} value={destination.key}>
                  {destination.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>{" "}
          <Select onValueChange={setDestination}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Destination" />
            </SelectTrigger>
            <SelectContent>
              {destinationsList.map((destination) => (
                <SelectItem key={destination.key} value={destination.key}>
                  {destination.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button className=" w-full mt-6" onClick={fetchData}>
            Search
          </Button>
        </div>
      </form>
      <div className=" w-full px-20">
        {tableData && tableData.length > 0 && <StatTable data={tableData} />}
        {!tableData || (tableData.length === 0 && <div>No data found</div>)}
      </div>
    </div>
  );
}
