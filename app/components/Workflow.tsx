"use client";

import { useState } from "react";

const workflowSteps = [
  {
    id: "01",
    label: "Client",
    title: "Create the client workspace",
    description:
      "Bring each client into a centralized workspace where compliance activity, documents, deadlines, and communication can be managed together.",
    status: "CLIENT CREATED",
    metric: "248 active clients",
  },
  {
    id: "02",
    label: "Documents",
    title: "Collect the right documents",
    description:
      "Track required documents and identify what is still missing before a compliance task reaches its deadline.",
    status: "DOCUMENT COLLECTION",
    metric: "94% documents received",
  },
  {
    id: "03",
    label: "AI Extraction",
    title: "Turn documents into structured data",
    description:
      "Process incoming documents and surface relevant information so teams can move from files to actionable compliance data.",
    status: "AI PROCESSING",
    metric: "Documents being processed",
  },
  {
    id: "04",
    label: "Compliance",
    title: "Monitor compliance activity",
    description:
      "Connect client information with compliance workflows and keep important actions visible to the people responsible for them.",
    status: "COMPLIANCE CHECK",
    metric: "37 tasks requiring attention",
  },
  {
    id: "05",
    label: "Deadlines",
    title: "Stay ahead of deadlines",
    description:
      "Monitor upcoming compliance dates and surface actions before they become urgent, reducing the need for manual follow-ups.",
    status: "DEADLINE MONITORING",
    metric: "12 deadlines approaching",
  },
  {
    id: "06",
    label: "WhatsApp",
    title: "Keep clients informed",
    description:
      "Use communication workflows to keep clients updated about documents, actions, and important compliance events.",
    status: "CLIENT COMMUNICATION",
    metric: "Messages ready to send",
  },
  {
    id: "07",
    label: "Audit Trail",
    title: "Keep every action traceable",
    description:
      "Maintain a clear operational history so teams can understand what happened, when it happened, and what action was taken.",
    status: "AUDIT TRAIL",
    metric: "Activity history synchronized",
  },
];

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = workflowSteps[activeStep];

  return (
    <section
      id="workflow"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 py-32 text-white lg:px-8"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          <div>

            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              Workflow
            </p>

            <div className="mt-5 h-px w-16 bg-white/30" />

            <p className="mt-8 max-w-xs text-sm leading-7 text-white/30">
              From the first client interaction to the final audit event,
              every operational step stays connected.
            </p>

          </div>

          <div>

            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">

              One workflow.
              <br />

              <span className="text-white/30">
                Every compliance action connected.
              </span>

            </h2>

          </div>

        </div>

        {/* ================================================= */}
        {/* WORKFLOW NAVIGATION */}
        {/* ================================================= */}

        <div className="mt-20 overflow-x-auto pb-4">

          <div className="flex min-w-max items-center">

            {workflowSteps.map((step, index) => (
              <div key={step.id} className="flex items-center">

                <button
                  onClick={() => setActiveStep(index)}
                  className={`group flex items-center gap-3 rounded-full border px-4 py-3 transition-all duration-300 ${
                    activeStep === index
                      ? "border-white/30 bg-white text-black"
                      : "border-white/10 bg-white/[0.02] text-white/40 hover:border-white/20 hover:text-white"
                  }`}
                >

                  <span
                    className={`font-mono text-[9px] ${
                      activeStep === index
                        ? "text-black/50"
                        : "text-white/20"
                    }`}
                  >
                    {step.id}
                  </span>

                  <span className="text-xs font-medium">
                    {step.label}
                  </span>

                </button>

                {index < workflowSteps.length - 1 && (
                  <div className="mx-3 h-px w-8 bg-white/10" />
                )}

              </div>
            ))}

          </div>

        </div>

        {/* ================================================= */}
        {/* MAIN PRODUCT EXPERIENCE */}
        {/* ================================================= */}

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-[#080808]">

          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

            {/* ================================================= */}
            {/* LEFT PANEL */}
            {/* ================================================= */}

            <div className="border-b border-white/10 p-8 sm:p-12 lg:border-b-0 lg:border-r lg:p-14">

              <div className="flex items-center justify-between">

                <span className="font-mono text-xs text-white/20">
                  STEP {currentStep.id}
                </span>

                <span className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.04] px-3 py-1.5 text-[9px] text-emerald-400">

                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                  ACTIVE

                </span>

              </div>

              <div className="mt-14">

                <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                  {currentStep.status}
                </p>

                <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                  {currentStep.title}
                </h3>

                <p className="mt-6 text-sm leading-7 text-white/40 sm:text-base">
                  {currentStep.description}
                </p>

              </div>

              {/* Metric */}
              <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.025] p-5">

                <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                  Current signal
                </p>

                <div className="mt-3 flex items-end justify-between">

                  <p className="text-sm text-white/70">
                    {currentStep.metric}
                  </p>

                  <span className="text-emerald-400">
                    ↗
                  </span>

                </div>

              </div>

            </div>

            {/* ================================================= */}
            {/* RIGHT PRODUCT PANEL */}
            {/* ================================================= */}

            <div className="relative min-h-[550px] overflow-hidden p-6 sm:p-10">

              {/* Grid */}
              <div className="pointer-events-none absolute inset-0 opacity-30">

                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                  }}
                />

              </div>

              {/* Fake browser */}
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#050505] shadow-2xl">

                {/* Browser top */}
                <div className="flex h-12 items-center justify-between border-b border-white/10 px-5">

                  <div className="flex gap-1.5">

                    <span className="h-2 w-2 rounded-full bg-white/15" />

                    <span className="h-2 w-2 rounded-full bg-white/15" />

                    <span className="h-2 w-2 rounded-full bg-white/15" />

                  </div>

                  <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
                    obliq / operations
                  </span>

                  <span className="text-[8px] text-white/20">
                    LIVE
                  </span>

                </div>

                {/* Dashboard */}
                <div className="p-5 sm:p-7">

                  {/* Header */}
                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                        {currentStep.label}
                      </p>

                      <p className="mt-2 text-xl font-medium tracking-tight">
                        {currentStep.status}
                      </p>

                    </div>

                    <div className="rounded-lg border border-white/10 px-3 py-2">

                      <span className="text-[9px] text-emerald-400">
                        ● SYNCED
                      </span>

                    </div>

                  </div>

                  {/* Dynamic visualization */}
                  <div className="mt-8">

                    {activeStep === 0 && (
                      <ClientVisualization />
                    )}

                    {activeStep === 1 && (
                      <DocumentsVisualization />
                    )}

                    {activeStep === 2 && (
                      <AIVisualization />
                    )}

                    {activeStep === 3 && (
                      <ComplianceVisualization />
                    )}

                    {activeStep === 4 && (
                      <DeadlineVisualization />
                    )}

                    {activeStep === 5 && (
                      <WhatsAppVisualization />
                    )}

                    {activeStep === 6 && (
                      <AuditVisualization />
                    )}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================================================= */}
        {/* BOTTOM PROGRESS */}
        {/* ================================================= */}

        <div className="mt-8">

          <div className="h-px overflow-hidden bg-white/10">

            <div
              className="h-full bg-white/60 transition-all duration-500"
              style={{
                width: `${((activeStep + 1) / workflowSteps.length) * 100}%`,
              }}
            />

          </div>

          <div className="mt-4 flex justify-between">

            <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">
              Workflow progress
            </span>

            <span className="font-mono text-[9px] text-white/30">
              {String(activeStep + 1).padStart(2, "0")} /{" "}
              {String(workflowSteps.length).padStart(2, "0")}
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}


/* ========================================================= */
/* CLIENT VISUALIZATION */
/* ========================================================= */

function ClientVisualization() {
  return (
    <div className="space-y-3">

      <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-[9px] text-white/25">
              CLIENT
            </p>

            <p className="mt-2 text-sm text-white/70">
              Acme Industries
            </p>
          </div>

          <span className="text-[9px] text-emerald-400">
            ACTIVE
          </span>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-3">

        <SmallMetric
          label="Compliance"
          value="94%"
        />

        <SmallMetric
          label="Documents"
          value="38"
        />

        <SmallMetric
          label="Open tasks"
          value="12"
        />

        <SmallMetric
          label="Deadlines"
          value="4"
        />

      </div>

    </div>
  );
}


/* ========================================================= */
/* DOCUMENT VISUALIZATION */
/* ========================================================= */

function DocumentsVisualization() {
  return (
    <div className="space-y-3">

      {[
        ["GST Return", "Received"],
        ["Bank Statement", "Received"],
        ["Purchase Register", "Missing"],
        ["Sales Register", "Received"],
      ].map(([document, status]) => (
        <div
          key={document}
          className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.025] p-4"
        >

          <div className="flex items-center gap-3">

            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10">
              <span className="text-[10px] text-white/30">
                DOC
              </span>
            </div>

            <span className="text-xs text-white/60">
              {document}
            </span>

          </div>

          <span
            className={`text-[9px] ${
              status === "Missing"
                ? "text-amber-400"
                : "text-emerald-400"
            }`}
          >
            {status}
          </span>

        </div>
      ))}

    </div>
  );
}


/* ========================================================= */
/* AI VISUALIZATION */
/* ========================================================= */

function AIVisualization() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-[9px] uppercase tracking-wider text-white/20">
            Processing
          </p>

          <p className="mt-2 text-sm text-white/70">
            GST_Return_July.pdf
          </p>

        </div>

        <span className="text-[9px] text-emerald-400">
          98.4%
        </span>

      </div>

      <div className="mt-8 space-y-4">

        {[
          ["Document classification", "Complete"],
          ["Field extraction", "Complete"],
          ["Data validation", "Running"],
          ["Workflow mapping", "Queued"],
        ].map(([label, status], index) => (
          <div key={label}>

            <div className="flex justify-between">

              <span className="text-[9px] text-white/30">
                {label}
              </span>

              <span className="text-[9px] text-white/40">
                {status}
              </span>

            </div>

            <div className="mt-2 h-1 rounded-full bg-white/5">

              <div
                className={`h-full rounded-full ${
                  status === "Running"
                    ? "w-[65%] bg-white/50"
                    : status === "Queued"
                    ? "w-[15%] bg-white/20"
                    : "w-full bg-emerald-400/50"
                }`}
              />

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}


/* ========================================================= */
/* COMPLIANCE VISUALIZATION */
/* ========================================================= */

function ComplianceVisualization() {
  return (
    <div className="grid grid-cols-2 gap-3">

      <ComplianceCard
        label="GST"
        status="On track"
      />

      <ComplianceCard
        label="TDS"
        status="Attention"
      />

      <ComplianceCard
        label="ROC"
        status="On track"
      />

      <ComplianceCard
        label="Income Tax"
        status="Monitoring"
      />

    </div>
  );
}


/* ========================================================= */
/* DEADLINE VISUALIZATION */
/* ========================================================= */

function DeadlineVisualization() {
  return (
    <div className="space-y-3">

      {[
        ["GST filing", "2 days", "Urgent"],
        ["TDS payment", "5 days", "Upcoming"],
        ["ROC filing", "12 days", "Upcoming"],
      ].map(([name, time, status]) => (
        <div
          key={name}
          className="rounded-xl border border-white/10 bg-white/[0.025] p-5"
        >

          <div className="flex items-center justify-between">

            <span className="text-xs text-white/60">
              {name}
            </span>

            <span
              className={`text-[9px] ${
                status === "Urgent"
                  ? "text-amber-400"
                  : "text-white/30"
              }`}
            >
              {status}
            </span>

          </div>

          <div className="mt-4 flex items-end justify-between">

            <span className="text-2xl font-semibold">
              {time}
            </span>

            <span className="text-[9px] text-white/20">
              remaining
            </span>

          </div>

        </div>
      ))}

    </div>
  );
}


/* ========================================================= */
/* WHATSAPP VISUALIZATION */
/* ========================================================= */

function WhatsAppVisualization() {
  return (
    <div className="mx-auto max-w-sm">

      <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-5">

        <div className="border-b border-white/10 pb-4">

          <p className="text-[9px] uppercase tracking-wider text-white/20">
            Client communication
          </p>

          <p className="mt-2 text-xs text-white/60">
            WhatsApp workflow
          </p>

        </div>

        <div className="mt-6 space-y-3">

          <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-white px-4 py-3">

            <p className="text-[10px] leading-5 text-black">
              Your GST filing documents are due in 2 days. Please upload
              the remaining documents.
            </p>

          </div>

          <div className="max-w-[70%] rounded-2xl rounded-bl-md border border-white/10 bg-black px-4 py-3">

            <p className="text-[10px] leading-5 text-white/50">
              I&apos;ll upload them today.
            </p>

          </div>

        </div>

        <div className="mt-6 flex items-center gap-2">

          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

          <span className="text-[9px] text-white/25">
            Workflow active
          </span>

        </div>

      </div>

    </div>
  );
}


/* ========================================================= */
/* AUDIT VISUALIZATION */
/* ========================================================= */

function AuditVisualization() {
  return (
    <div className="space-y-3">

      {[
        ["10:42:08", "Document uploaded"],
        ["10:42:12", "AI extraction completed"],
        ["10:42:17", "Compliance task created"],
        ["10:43:04", "Client notification queued"],
      ].map(([time, event]) => (
        <div
          key={time}
          className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-4"
        >

          <span className="font-mono text-[9px] text-white/20">
            {time}
          </span>

          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

          <span className="text-xs text-white/50">
            {event}
          </span>

        </div>
      ))}

    </div>
  );
}


/* ========================================================= */
/* SMALL COMPONENTS */
/* ========================================================= */

function SmallMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">

      <p className="text-[9px] uppercase tracking-wider text-white/20">
        {label}
      </p>

      <p className="mt-2 text-xl font-semibold">
        {value}
      </p>

    </div>
  );
}


function ComplianceCard({
  label,
  status,
}: {
  label: string;
  status: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">

      <div className="flex items-center justify-between">

        <span className="text-sm text-white/60">
          {label}
        </span>

        <span className="h-2 w-2 rounded-full bg-emerald-400" />

      </div>

      <p className="mt-8 text-[9px] uppercase tracking-wider text-white/25">
        Status
      </p>

      <p className="mt-2 text-xs text-white/60">
        {status}
      </p>

    </div>
  );
}