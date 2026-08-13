import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import NewWorkflowButton from "@/features/workflows/components/new-workflow-button";
import { auth } from "@clerk/nextjs/server";
import { WorkflowIcon } from "lucide-react";

const page = async () => {
  await auth.protect();
  return (
    <Empty className="min-h-svh border-none">
      <EmptyHeader>
        <EmptyMedia variant={"icon"}>
          <WorkflowIcon />
        </EmptyMedia>
        <EmptyTitle>No workflow selected</EmptyTitle>
        <EmptyDescription>
          Select a workflow from the sidebar or create a new one to get started.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <NewWorkflowButton />
      </EmptyContent>
    </Empty>
  );
};

export default page;
