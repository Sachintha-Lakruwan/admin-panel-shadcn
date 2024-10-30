"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FiLogOut } from "react-icons/fi";
import Image from "next/image";
import img from "@/public/B Airways.png";
import { useRouter } from "next/navigation";

export default function UserSideBar() {
  const router = useRouter();
  return (
    <Sidebar className=" w-1/4">
      <SidebarHeader>
        <div className=" bg-zinc-900 rounded-xl w-16 aspect-square relative">
          <Image src={img} fill sizes="100vw" alt="b-airways logo"></Image>
        </div>
      </SidebarHeader>
      <SidebarContent className="  font-bold pt-5">
        <SidebarGroup
          className=" cursor-pointer transition-all delay-75 hover:bg-zinc-200 duration-300"
          onClick={() => router.push("/view_passengers")}
        >
          View Passengers
        </SidebarGroup>
        <SidebarGroup
          className=" cursor-pointer transition-all delay-75 hover:bg-zinc-200 duration-300"
          onClick={() => router.push("/as")}
        >
          Passenger Count by Destination
        </SidebarGroup>
        <SidebarGroup
          className=" cursor-pointer transition-all delay-75 hover:bg-zinc-200 duration-300"
          onClick={() => router.push("/as")}
        >
          Booking by Passenger Type
        </SidebarGroup>
        <SidebarGroup
          className=" cursor-pointer transition-all delay-75 hover:bg-zinc-200 duration-300"
          onClick={() => router.push("/as")}
        >
          Flight History and Passenger Data
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className=" flex w-full flex-row justify-between items-center">
        <div className=" flex gap-5">
          <Avatar>
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
          </div>
        </div>
        <FiLogOut className=" text-xl" />
      </SidebarFooter>
    </Sidebar>
  );
}
