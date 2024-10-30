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
import { convertDate } from "@/helpers/convertDate";

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
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();
  const [passengerCount, setPassengerCount] = React.useState<number>(0);
  const [destinationsList, setDestinationsList] =
    React.useState<Destination[]>(destinations);
  const [destination, setDestination] = React.useState<string>("");

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

  async function handleSearch() {
    try {
      if (!startDate || !endDate) {
        return;
      }
      const destinations = await fetch(
        `/api/analytics/passengers/destination_count?destination=${destination}&start_date=${convertDate(
          startDate
        )}&end_date=${convertDate(endDate)}`
      ).then((res) => res.json());
      setPassengerCount(parseInt(destinations));
    } catch (error) {
      console.error("Error fetching destinations:", error);
    }
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
