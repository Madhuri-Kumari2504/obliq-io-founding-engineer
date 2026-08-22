"use client";

import { useMemo, useState } from "react";

type IntelligenceItem = {
  id: string;
  label: string;
  value: string;
  description: string;
  status: string;
};

const intelligenceItems: IntelligenceItem[] = [
  {
    id: "clients",
    label: "Clients",
    value: "248",
    description:
      "Active client workspaces connected to the operational layer.",
    status: "LIVE",
  },
  {
    id: "documents",
    label: "Documents",
    value: "1,248",
    description:
      "Documents processed through the intelligence workspace.",
    status: "AI ACTIVE",
  },
  {
    id: "deadlines",
    label: "Deadlines",
    value: "37",
    description:
      "Upcoming compliance deadlines being actively monitored.",
    status: "MONITORING",
  },
  {
    id: "tasks",
    label: "Tasks",
    value: "1,482",
    description:
      "Operational actions tracked across compliance workflows.",
    status: "ACTIVE",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Client",
    description: "Centralized client context",
  },
  {
    number: "02",
    title: "Documents",
    description: "Structured document intelligence",
  },
  {
    number: "03",
    title: "AI",
    description: "Contextual compliance reasoning",
  },
  {
    number: "04",
    title: "Compliance",
    description: "Regulatory actions and health",
  },
  {
    number: "05",
    title: "Deadlines",
    description: "Proactive deadline monitoring",
  },
  {
    number: "06",
    title: "Tasks",
    description: "Assigned operational actions",
  },
  {
    number: "07",
    title: "Audit",
    description: "Connected activity history",
  },
];

export default function OperationalIntelligence() {
  const [selectedId, setSelectedId] = useState("clients");

  const selectedItem = useMemo(
    () =>
      intelligenceItems.find(
        (item) => item.id === selectedId
      ) ?? intelligenceItems[0],
    [selectedId]
  );

  return (
    <section
      id="operational-intelligence"
      className="scroll-mt-24 relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 py-32 text-white lg:px-8"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[180px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.015]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                <span className="text-xs text-white/50">
                  10
                </span>
              </div>

              <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                08
              </span>

            </div>

            <div className="mt-6 h-px w-16 bg-white/30" />

            <p className="mt-8 max-w-xs text-sm leading-7 text-white/30">
              Connect every operational signal into
              one intelligent layer where teams can
              understand, prioritize and act.
            </p>

          </div>

          <div>

            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Everything connected.
              <br />

              <span className="text-white/30">
                Nothing overlooked.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
              Clients, documents, AI insights, compliance
              actions, deadlines and tasks stay connected
              inside one operational workspace.
            </p>

          </div>

        </div>

        {/* METRIC CARDS */}

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">

          {intelligenceItems.map((item) => (

            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedId(item.id)}
              className={`group text-left transition ${
                selectedId === item.id
                  ? "bg-white/[0.07]"
                  : "bg-[#080808] hover:bg-white/[0.04]"
              }`}
            >

              <div className="p-6 sm:p-7">

                <div className="flex items-center justify-between">

                  <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                    {item.label}
                  </p>

                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      selectedId === item.id
                        ? "bg-emerald-400"
                        : "bg-white/20"
                    }`}
                  />

                </div>

                <p className="mt-6 text-3xl font-semibold tracking-tight text-white/75">
                  {item.value}
                </p>

                <p className="mt-2 text-[8px] text-white/20">
                  {item.status}
                </p>

                <div
                  className={`mt-6 h-px transition ${
                    selectedId === item.id
                      ? "bg-white/30"
                      : "bg-white/10"
                  }`}
                />

                <p className="mt-5 text-[9px] leading-6 text-white/30">
                  {item.description}
                </p>

              </div>

            </button>

          ))}

        </div>

        {/* SELECTED SIGNAL */}

        <div className="mt-8 rounded-3xl border border-white/10 bg-[#080808] p-6 sm:p-8">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="flex items-center gap-3">

                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <span className="text-[9px] text-white/40">
                    AI
                  </span>
                </span>

                <span className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                  Connected signal
                </span>

              </div>

              <h3 className="mt-5 text-2xl font-medium tracking-tight text-white/70 sm:text-3xl">
                {selectedItem.label}
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/30">
                {selectedItem.description}
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5">

              <p className="text-[7px] uppercase tracking-[0.2em] text-white/20">
                Current signal
              </p>

              <p className="mt-3 text-3xl font-semibold text-white/70">
                {selectedItem.value}
              </p>

              <div className="mt-3 flex items-center gap-2">

                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                <span className="text-[8px] text-emerald-400">
                  {selectedItem.status}
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* OPERATIONAL FLOW */}

        <div className="mt-24">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                Operational layer
              </p>

              <h3 className="mt-4 text-2xl font-medium tracking-tight text-white/65 sm:text-3xl">
                One connected workflow.
              </h3>

            </div>

            <p className="max-w-md text-[9px] leading-6 text-white/25">
              Every important compliance signal moves
              through the same operational layer instead
              of remaining trapped in disconnected tools.
            </p>

          </div>

          {/* FLOW */}

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-[#080808]">

            <div className="grid lg:grid-cols-7">

              {workflowSteps.map((step, index) => (

                <div
                  key={step.number}
                  className="relative border-b border-white/10 p-5 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
                >

                  <span className="font-mono text-[8px] text-white/15">
                    {step.number}
                  </span>

                  <h4 className="mt-5 text-sm font-medium text-white/55">
                    {step.title}
                  </h4>

                  <p className="mt-3 text-[8px] leading-5 text-white/20">
                    {step.description}
                  </p>

                  {index < workflowSteps.length - 1 && (
                    <span className="absolute right-3 top-1/2 hidden -translate-y-1/2 text-white/15 lg:block">
                      →
                    </span>
                  )}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* VALUE STATEMENTS */}

        <div className="mt-24 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3">

          <Value
            number="01"
            title="One source of truth"
            text="Keep client context, documents, compliance records, deadlines and tasks connected in one workspace."
          />

          <Value
            number="02"
            title="Context before action"
            text="Give every operational task the context required to understand why it matters and what should happen next."
          />

          <Value
            number="03"
            title="Intelligence that moves"
            text="Turn AI insights into concrete workflows, assignments and measurable operational outcomes."
          />

        </div>

      </div>

    </section>
  );
}


/* ========================================================= */
/* VALUE                                                      */
/* ========================================================= */

function Value({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div>

      <span className="font-mono text-[8px] text-white/15">
        {number}
      </span>

      <h3 className="mt-5 text-sm font-medium text-white/60">
        {title}
      </h3>

      <p className="mt-3 max-w-sm text-[9px] leading-6 text-white/20">
        {text}
      </p>

    </div>
  );
}