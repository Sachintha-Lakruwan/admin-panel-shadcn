import React from "react";
import UserSideBar from "./UserSideBar";

export default function MenuBar({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-full h-screen">
      <div className=" w-full h-[10%] bg-zinc-100"></div>
      <div className=" h-[90%] w-full grid grid-cols-[1fr_4fr]">
        <div className=" w-full h-full">
          <UserSideBar />
        </div>
        <div className=" w-full h-full">{children}</div>
      </div>
    </div>
  );
}
