import WorkflowShell from "@/features/workflows/components/workflow-shell";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <WorkflowShell workflowId={id} />;
};

export default Page;
