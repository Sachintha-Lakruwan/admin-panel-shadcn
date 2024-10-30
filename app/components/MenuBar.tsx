import React from "react";
import UserSideBar from "./UserSideBar";

export default function MenuBar({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-full h-screen grid grid-cols-[1fr_3fr]">
      <UserSideBar />
      <div className=" h-screen w-full">
        <div className=" w-full h-[10%] bg-zinc-100"></div>
        <div className=" w-full h-[90%]">{children}</div>
      </div>
    </div>
  );
}
