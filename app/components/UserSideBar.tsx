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

export default function UserSideBar() {
  return (
    <Sidebar className=" w-1/4">
      <SidebarHeader>B-Airways</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>View Passenger</SidebarGroup>
        <SidebarGroup>Passenger Count by Destination</SidebarGroup>
        <SidebarGroup>Booking by Passenger Type</SidebarGroup>
        <SidebarGroup>Flight History and Passenger Data</SidebarGroup>
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
