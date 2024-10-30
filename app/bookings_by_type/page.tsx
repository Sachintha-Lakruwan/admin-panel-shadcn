"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { UserDatePicker } from "../passenger_count_by_destination/PickADate";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Separator } from "@/components/ui/separator";
import BookingsNumber from "./BookingsNumber";

export default function Page() {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  function handleSearch() {}
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
        <div>
          <Button className=" w-full mt-6" onClick={handleSearch}>
            Search
          </Button>
        </div>
      </form>
      <div className=" flex gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Guest</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent className=" flex flex-col items-center justify-center">
            <BookingsNumber number={10} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Registered</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <Separator className="my-4" />
              <div className="flex items-center space-x-4 text-sm h-40">
                <div className=" flex items-center flex-col">
                  <Label className=" mb-4">New</Label>
                  <BookingsNumber number={102} />
                </div>
                <Separator orientation="vertical" />
                <div className=" flex items-center flex-col">
                  <Label className=" mb-4">Frequent</Label>
                  <BookingsNumber number={102} />
                </div>
                <Separator orientation="vertical" />
                <div className=" flex items-center flex-col">
                  <Label className=" mb-4">Gold</Label>
                  <BookingsNumber number={102} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
