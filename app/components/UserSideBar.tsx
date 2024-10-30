"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
// import { Label } from "@/components/ui/label";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FiLogOut } from "react-icons/fi";
import Image from "next/image";
import img from "@/public/B Airways.png";
import { useRouter } from "next/navigation";
import { FaPerson } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMergeType } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";

export default function UserSideBar() {
  const router = useRouter();
  return (
    <Sidebar className=" w-1/4">
      <SidebarHeader>
        <div className=" bg-zinc-900 rounded-xl w-16 aspect-square relative scale-90">
          <Image src={img} fill sizes="100vw" alt="b-airways logo"></Image>
        </div>
      </SidebarHeader>
      <SidebarContent className="pt-5">
        <SidebarGroup
          className=" cursor-pointer transition-all delay-75 hover:bg-zinc-200 duration-300 px-4 flex flex-row gap-4 items-center py-4"
          onClick={() => router.push("/view_passengers")}
        >
          <FaPerson className=" text-lg" />
          View Passengers
        </SidebarGroup>
        <SidebarGroup
          className=" cursor-pointer transition-all delay-75 hover:bg-zinc-200 duration-300 px-4 flex flex-row gap-4 items-center py-4"
          onClick={() => router.push("/passenger_count_by_destination")}
        >
          <FaLocationDot className=" text-lg" />
          Passenger Count by Destination
        </SidebarGroup>
        <SidebarGroup
          className=" cursor-pointer transition-all delay-75 hover:bg-zinc-200 duration-300 px-4 flex flex-row gap-4 items-center py-4"
          onClick={() => router.push("/bookings_by_type")}
        >
          <MdOutlineMergeType className=" text-lg" />
          Bookings by Passenger Type
        </SidebarGroup>
        <SidebarGroup
          className=" cursor-pointer transition-all delay-75 hover:bg-zinc-200 duration-300 px-4 flex flex-row gap-4 items-center py-4"
          onClick={() => router.push("/flight_history")}
        >
          <FaHistory className=" text-lg" />
          Flight History and Passenger Data
        </SidebarGroup>
        <SidebarGroup
          className=" cursor-pointer transition-all delay-75 hover:bg-zinc-200 duration-300 px-4 flex flex-row gap-4 items-center py-4"
          onClick={() => router.push("/total_revenue")}
        >
          <AiFillDollarCircle className=" text-lg" />
          Total Revenue
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className=" flex w-full flex-row justify-between items-center">
        <div className=" flex gap-5">
          {/* <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className=" flex flex-col">
            <Label htmlFor="email" className=" font-bold text-md">
              Peter Mckinnon
            </Label>
            <Label htmlFor="email" className=" text-xs italic">
              Executive Board
            </Label>
          </div> */}
        </div>
        <FiLogOut className=" text-xl" />
      </SidebarFooter>
    </Sidebar>
  );
}
