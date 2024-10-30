import { Label } from "@radix-ui/react-label";
import React from "react";

export default function BookingsNumber({ number }: { number: number }) {
  return (
    <div className=" flex flex-col items-center justify-center">
      <Label className=" text-7xl font-bold">{number}</Label>
      <Label className=" text-sm italic text-center">Bookings</Label>
    </div>
  );
}
