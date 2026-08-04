import React from "react";
import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const page = async () => {
  await auth.protect();
  return (
    <div className="flex flex-col items-start gap-4">
      <UserButton />
      <OrganizationSwitcher />
    </div>
  );
};

export default page;
