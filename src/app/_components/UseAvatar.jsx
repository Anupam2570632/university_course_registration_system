'use client'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { logOut } from "../action";

export default function UserAvatar({ user }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="border-2 border-white cursor-pointer transition-transform duration-300 hover:scale-105">
          <AvatarFallback className="text-white bg-black font-bold text-xl flex items-center justify-center w-full h-full">
            {user?.username?.charAt(0)?.toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" side="bottom" className="w-40">
        <DropdownMenuItem onSelect={() => console.log("Go to profile")}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => logOut()}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
