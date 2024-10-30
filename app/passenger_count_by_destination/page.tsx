"use client";

import React from "react";
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

export default function Page() {
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();
  const [passengerCount, setPassengerCount] = React.useState<number>(0);

  return (
    <div className=" w-full h-[90%] p-6 flex flex-col items-center gap-8">
      <div>
        <div className="flex gap-6 mt-8">
          <UserDatePicker date={startDate} setDate={setStartDate} />
          <UserDatePicker date={endDate} setDate={setEndDate} />
        </div>
        <div className=" grid gap-6 mt-6 grid-cols-[1fr_1fr]">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Button className=" w-full">Search</Button>
        </div>
      </div>
      <Card className=" text-[10rem] p-14 aspect-square flex items-center justify-center">
        {passengerCount}
      </Card>
    </div>
  );
}
