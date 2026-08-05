"use client";

import React from "react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "./ui/sidebar";
import { useUser, useClerk } from "@clerk/nextjs";
import WorkflowNav from "@/features/workflows/components/workflow-nav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const { openUserProfile, signOut } = useClerk();
  const { user } = useUser();
  return (
    <Sidebar variant="inset" collapsible="icon" {...props}>
      <SidebarHeader className="flex-row items-center justify-between gap-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:gap-0">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: "min-w-0 group-data-[collapsible=icon]:!hidden",
              organizationSwitcherTrigger: "w-full justify-between",
            },
          }}
        />
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <WorkflowNav />
      </SidebarContent>
      <SidebarFooter className="group-data-[collapsible=icon]:items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} size={"icon"} className="rounded-full">
              <Avatar>
                <AvatarImage
                  src={user?.imageUrl || "./images/avatar.webp"}
                  alt={user?.fullName || "user"}
                />
                <AvatarFallback>
                  {user?.firstName?.charAt(0) || "B"}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => openUserProfile()}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => signOut({ redirectUrl: "/sign-in" })}
              className="text-destructive"
            >
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
