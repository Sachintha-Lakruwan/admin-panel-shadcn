"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Accordion } from "@/components/ui/accordion";
import OneUser from "./OneUser";
import { Passenger } from "./OneUser";

interface PassengerData {
  under_18: Passenger[];
  above_18: Passenger[];
}

const data: PassengerData = {
  under_18: [],
  above_18: [],
};

export default function Page() {
  const [passengerData, setPassengerData] = useState<PassengerData>(data);
  const [flightID, setFlightID] = useState<string>("");

  async function getPassenger() {
    if (flightID === "") {
      return;
    }
    console.log("fetching " + flightID)
    const res = await fetch(`/api/analytics/passengers/age_distribution?flight_code=${flightID}`);
    const data = await res.json();
    if (res.ok) {
      setPassengerData(data);
    }
  }

  return (
    <div className="p-10">
      <div className=" flex items-center justify-start">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getPassenger();
          }}
          className=" flex gap-6"
        >
          <Input onChange={(e) => setFlightID(e.target.value)} />
          <Button onClick={getPassenger}>Search</Button>
        </form>
      </div>
      <div className=" grid grid-cols-[1fr_1fr] mt-6 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Below 18</CardTitle>
            <CardDescription>Add description - Thivinu</CardDescription>
          </CardHeader>
          <CardContent className="max-h-[100px] overflow-scroll">
            <Accordion type="single" collapsible>
              {passengerData.under_18.length === 0 && (
                <p>No passengers found</p>
              )}
              {passengerData.under_18.map((user) => (
                <OneUser key={crypto.randomUUID()} passenger={user} />
              ))}
            </Accordion>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Above 18</CardTitle>
            <CardDescription>Add description - Thivinu</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              {passengerData.above_18.length === 0 && (
                <p>No passengers found</p>
              )}
              {passengerData.above_18.map((user) => (
                <OneUser key={crypto.randomUUID()} passenger={user} />
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}