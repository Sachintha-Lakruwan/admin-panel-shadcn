import { Card } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import React from "react";

export interface RevenueCardProps {
  model: string;
  revenue: number;
}

export default function RevenueCard({ model, revenue }: RevenueCardProps) {
  return (
    <Card className=" aspect-square flex flex-col items-center justify-center gap-3">
      <Label className=" text-3xl font-bold">{model}</Label>
      <Label className=" text-xl font-extralight">{revenue} $</Label>
    </Card>
  );
}
