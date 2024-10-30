import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";

export interface Passenger {
  name: string;
  age: number;
  country: string;
  gender: string;
  passport_number: string;
  NIC: string;
  age_group: string;
}

export default function OneUser({ passenger }: { passenger: Passenger }) {
  return (
    <AccordionItem value={crypto.randomUUID()}>
      <AccordionTrigger>{passenger.name}</AccordionTrigger>
      <AccordionContent>
        <Card>
          <CardContent className=" grid grid-cols-2 py-4 gap-2">
            <Label>Age</Label>
            <Label>{passenger.age}</Label>
            <Label>Country</Label>
            <Label>{passenger.country}</Label>
            <Label>Gender</Label>
            <Label>{passenger.gender}</Label>
            <Label>Passport Number</Label>
            <Label>{passenger.passport_number}</Label>
            <Label>NIC</Label>
            <Label>{passenger.NIC}</Label>
          </CardContent>
        </Card>
      </AccordionContent>
    </AccordionItem>
  );
}