"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const UserAvatar = () => {
  const { openUserProfile, signOut } = useClerk();
  const { user } = useUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          size={"icon-sm"}
          className="rounded-full self-start"
        >
          <Avatar>
            <AvatarImage
              src={user?.imageUrl || "./images/avatar.webp"}
              alt={user?.fullName || "user"}
            />
            <AvatarFallback>{user?.firstName?.charAt(0) || "B"}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background">
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
  );
};

export default UserAvatar;
