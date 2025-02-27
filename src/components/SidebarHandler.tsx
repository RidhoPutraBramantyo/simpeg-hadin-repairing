// components/SidebarHandler.tsx
"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useState } from "react";

export function SidebarHandler({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [username, setusername] = useState("username");
  const [userNip, setuserNip] = useState("NIP-01234");
  const shouldShowSidebar = !["/signin"].includes(pathname);

  if (!shouldShowSidebar) {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <div className="w-full flex items-center gap-2 px-4 relative">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Label className="font-bold text-xl">SIMPEG</Label>

          <DropdownMenu>
            <DropdownMenuTrigger className="capitalize bg-primary/60 h-fit p-[2px] flex items-center gap-2 ml-auto rounded-full ">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>{" "}
              <div className="flex flex-col">
                <Label className="text-black text-sm">{username}</Label>
                <Label className="text-black/50 text-xs">{userNip}</Label>
              </div>
              <ChevronDown className="text-black/50" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-xl">
              <DropdownMenuLabel>{username}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Keluar</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
