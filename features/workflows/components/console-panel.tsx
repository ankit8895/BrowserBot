"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useState } from "react";
import InspectorPanel from "./inspector-panel";
import LogsPanel, { type StepSelection } from "./logs-panel";

// The run console below the canvas. It owns which step is selected: the logs on
// the left drive the selection, and while a step is selected the InspectorPanel
// on the right shows its output. Clicking the selected step again clears it.
const ConsolePanel = () => {
  const [selected, setSelected] = useState<StepSelection | null>(null);

  const toggle = (selection: StepSelection) => {
    setSelected((prev) =>
      prev && prev.runId === selection.runId && prev.nodeId === selection.nodeId
        ? null
        : selection,
    );
  };

  return (
    <ResizablePanelGroup orientation="horizontal" className="size-full">
      <ResizablePanel minSize={"12rem"}>
        <LogsPanel selected={selected} onSelectStep={toggle} />
      </ResizablePanel>
      {selected && (
        <>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={"20rem"} minSize={"12rem"}>
            <InspectorPanel selection={selected} />
          </ResizablePanel>
        </>
      )}
    </ResizablePanelGroup>
  );
};

export default ConsolePanel;
