"use client";

import React from "react";
import NodeIcon from "./node-icon";
import { useConsoleRuns } from "./workflow-runs-provider";
import type { ConsoleSelection } from "./logs-panel";
import SessionReplay from "./session-replay";

// A short, centered note for when there's nothing concrete to show.
function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex size-full items-center justify-center p-3 text-center text-xs text-muted-foreground">
      {children}
    </div>
  );
}

// The output pane for whatever the logs have selected: a step's output, or a
// whole run's session replay. It re-reads the shared run history so a
// still-running step's output appears the moment it lands, without a re-select.
const InspectorPanel = ({ selection }: { selection: ConsoleSelection }) => {
  const runs = useConsoleRuns();
  const run = runs.find((r) => r.id === selection.runId);

  // A run's replay stands for the whole session — play it instead of any step.
  if (selection.kind === "replay") {
    if (!run?.browserbaseSessionId) {
      return <Note>This recording is no longer available.</Note>;
    }
    return <SessionReplay sessionId={run.browserbaseSessionId}></SessionReplay>;
  }

  const step = run?.steps.find((s) => s.nodeId === selection.nodeId);

  // The selected step can vanish if its run drops out of the realtime window.
  if (!step) return <Note>This step is no longer available.</Note>;

  return (
    <div className="flex size-full flex-col">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2">
        <NodeIcon type={step.type} />
        <span className="truncate text-xs font-medium">{step.title}</span>
      </div>
      {step.error ? (
        <pre className="min-h-0 flex-1 overflow-auto whitespace-pre-wrap wrap-break-word p-3 font-mono text-xs text-destructive">
          {step.error}
        </pre>
      ) : step.output !== undefined ? (
        <pre className="min-h-0 flex-1 overflow-auto p-3 font-mono text-xs">
          {JSON.stringify(step.output, null, 2)}
        </pre>
      ) : step.status === "pending" ? (
        <Note>This step hasn&apos;t run yet.</Note>
      ) : step.status === "running" ? (
        <Note>Waiting for this step to finish...</Note>
      ) : (
        <Note>This step produced no output.</Note>
      )}
    </div>
  );
};

export default InspectorPanel;
