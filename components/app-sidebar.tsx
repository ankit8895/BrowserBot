import React from "react";
import { OrganizationSwitcher } from "@clerk/nextjs";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "./ui/sidebar";
import WorkflowNav from "@/features/workflows/components/workflow-nav";
import { auth } from "@clerk/nextjs/server";
import { createdWorkflowActions } from "@/features/workflows/actions";
import { listWorkflows } from "@/features/workflows/data";
import UserAvatar from "./user-avatar";

const AppSidebar = async ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const { orgId } = await auth();
  const workflows = orgId ? await listWorkflows(orgId) : [];
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
        <WorkflowNav
          workflows={workflows}
          onCreateWorkflow={createdWorkflowActions}
        />
      </SidebarContent>
      <SidebarFooter className="group-data-[collapsible=icon]:items-center">
        <UserAvatar />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
