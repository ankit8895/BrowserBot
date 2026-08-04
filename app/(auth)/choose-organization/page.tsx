import React from "react";
import { TaskChooseOrganization } from "@clerk/nextjs";

const ChooseOrganizationPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <TaskChooseOrganization redirectUrlComplete="/" />
    </div>
  );
};

export default ChooseOrganizationPage;
