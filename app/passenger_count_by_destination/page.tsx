"use client";

import React, { useEffect } from "react";
import { UserDatePicker } from "./PickADate";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  { label: "New York", key: "NY" },
  { label: "New York2", key: "NY2" },
  { label: "New York3", key: "NY3" },
  { label: "New York4", key: "NY4" },
  { label: "New York5", key: "NY5" },
];

export default function Page() {
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();
  const [passengerCount, setPassengerCount] = React.useState<number>(0);
  const [destinationsList, setDestinationsList] =
    React.useState<Destination[]>(destinations);
  const [destionation, setDestination] = React.useState<string>("");

  async function fetchDestination() {
    // TODO1: Fetch destinations from the server
    setDestinationsList(destinations);
  }

  useEffect(() => {
    fetchDestination();
  }, []);

  function handleSearch() {
    // TODO2: Fetch passenger count from the server
    console.log(startDate, endDate, passengerCount, destionation);
    setPassengerCount(100);
  }

  return (
    <div className=" w-full h-[90%] p-6 flex flex-col items-center gap-8">
      <form action={handleSearch}>
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
        <div className=" grid gap-6 mt-6 grid-cols-[1fr_1fr]">
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
          <Button className=" w-full" onClick={handleSearch}>
            Search
          </Button>
        </div>
      </form>
      <Card className=" text-[10rem] p-14 aspect-square flex items-center justify-center">
        {passengerCount}
      </Card>
    </div>
  );
}
