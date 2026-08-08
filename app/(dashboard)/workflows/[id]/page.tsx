import WorkflowShell from "@/features/workflows/components/workflow-shell";
import Room from "@/features/workflows/components/room";
import { auth } from "@clerk/nextjs/server";
import { liveblocks } from "@/lib/liveblocks";
import { getWorkflow } from "@/features/workflows/data";
import { notFound } from "next/navigation";
import { ReactFlowProvider } from "@xyflow/react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const { orgId } = await auth();

  if (!orgId) notFound();

  const workflow = await getWorkflow(orgId, id);
  if (!workflow) notFound();

  // Rooms are private by default under ID-token auth. Grant write access to the
  // owning org, matching the `groupIds: [orgId]` issued by the auth endpoint.
  await liveblocks.getOrCreateRoom(id, {
    organizationId: orgId,
    defaultAccesses: [],
    groupsAccesses: {
      [orgId]: ["room:write"],
    },
    metadata: {
      title: workflow.name,
    },
  });
  return (
    // The canvas and the sidebar's node palette live in separate components, so a
    // single ReactFlowProvider wraps both to give them one shared React Flow store.
    <Room roomId={id}>
      <ReactFlowProvider>
        <WorkflowShell workflowId={id} />
      </ReactFlowProvider>
    </Room>
  );
};

export default Page;
