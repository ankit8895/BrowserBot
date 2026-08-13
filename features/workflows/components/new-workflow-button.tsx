"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useTransition } from "react";
import { createdWorkflowActions } from "../actions";
import { generateSlug } from "../lib/generate-slug";

const NewWorkflowButton = () => {
  const [isPending, startTransition] = useTransition();

  const handleCreateWorkflow = () => {
    startTransition(async () => {
      await createdWorkflowActions(generateSlug());
    });
  };

  return (
    <Button onClick={handleCreateWorkflow} disabled={isPending}>
      <PlusIcon />
      New workflow
    </Button>
  );
};

export default NewWorkflowButton;
