"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createdWorkflow } from "./data";

export async function createdWorkflowActions(name: string) {
  const { orgId } = await auth();

  if (!orgId) throw new Error("No active organization");

  const workflow = await createdWorkflow(orgId, name);

  revalidatePath("/workflows", "layout");
  redirect(`/workflows/${workflow.id}`);
}
