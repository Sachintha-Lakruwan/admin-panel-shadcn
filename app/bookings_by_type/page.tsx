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
import { convertDate } from "@/helpers/convertDate";

interface bookingCounts {
  guest: number;
  new: number;
  frequent: number;
  gold: number;
}

const bookingCountsTemp: bookingCounts = {
  guest: 10,
  new: 102,
  frequent: 102,
  gold: 102,
};

export default function Page() {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [bookingCount, setBokingCount] =
    useState<bookingCounts>(bookingCountsTemp);

  async function fetchData() {
    try {
      // setLoading(true);
      if (!startDate || !endDate) {
        return;
      }
      const response = await fetch(
        `/api/analytics/bookings_type_count?start_date=${convertDate(
          startDate
        )}&end_date=${convertDate(endDate)}`
      );
      if (response) {
        const temp = await response.json();
        // setAirports(temp);
        console.log(temp);
      }
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
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
      <div className=" flex gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Guest</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent className=" flex flex-col items-center justify-center">
            <BookingsNumber number={bookingCount.guest} />
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
                  <BookingsNumber number={bookingCount.new} />
                </div>
                <Separator orientation="vertical" />
                <div className=" flex items-center flex-col">
                  <Label className=" mb-4">Frequent</Label>
                  <BookingsNumber number={bookingCount.frequent} />
                </div>
                <Separator orientation="vertical" />
                <div className=" flex items-center flex-col">
                  <Label className=" mb-4">Gold</Label>
                  <BookingsNumber number={bookingCount.gold} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
