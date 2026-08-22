"use client";

import { useMemo, useState } from "react";

/* =========================================================
   TYPES
========================================================= */

type ComplianceArea =
  | "GST"
  | "TDS"
  | "ROC"
  | "Income Tax";

type RiskLevel = "Low" | "Medium" | "High";

type TaskStatus =
  | "Open"
  | "In Progress"
  | "Completed";

type ComplianceTask = {
  id: number;
  title: string;
  description: string;
  area: ComplianceArea;
  risk: RiskLevel;
  due: string;
  status: TaskStatus;
  owner: string;
};

type ComplianceAreaData = {
  name: ComplianceArea;
  score: number;
  status: string;
  pending: number;
  deadline: string;
  risk: RiskLevel;
};

/* =========================================================
   INITIAL TASK DATA
========================================================= */

const initialTasks: ComplianceTask[] = [
  {
    id: 1,
    title: "Review ITC reconciliation",
    description:
      "Input tax credit reconciliation requires review before the next GST filing.",
    area: "GST",
    risk: "High",
    due: "Due in 2 days",
    status: "Open",
    owner: "Finance Team",
  },
  {
    id: 2,
    title: "Collect missing client documents",
    description:
      "Two required documents are missing from the compliance workspace.",
    area: "GST",
    risk: "Medium",
    due: "Due in 4 days",
    status: "Open",
    owner: "Client Manager",
  },
  {
    id: 3,
    title: "Review TDS reconciliation",
    description:
      "TDS records should be reconciled before the upcoming payment cycle.",
    area: "TDS",
    risk: "Medium",
    due: "Due in 6 days",
    status: "In Progress",
    owner: "Tax Team",
  },
  {
    id: 4,
    title: "Verify ROC documents",
    description:
      "Recently uploaded ROC documents require human verification.",
    area: "ROC",
    risk: "Low",
    due: "Due in 9 days",
    status: "Open",
    owner: "Compliance Team",
  },
  {
    id: 5,
    title: "Review income tax records",
    description:
      "Verify supporting information before the upcoming income tax activity.",
    area: "Income Tax",
    risk: "Low",
    due: "Due in 18 days",
    status: "Open",
    owner: "Tax Team",
  },
];

/* =========================================================
   COMPLIANCE DATA
========================================================= */

const complianceAreas: ComplianceAreaData[] = [
  {
    name: "GST",
    score: 92,
    status: "On Track",
    pending: 2,
    deadline: "2 days",
    risk: "Low",
  },
  {
    name: "TDS",
    score: 78,
    status: "Attention",
    pending: 1,
    deadline: "6 days",
    risk: "Medium",
  },
  {
    name: "ROC",
    score: 85,
    status: "On Track",
    pending: 1,
    deadline: "9 days",
    risk: "Low",
  },
  {
    name: "Income Tax",
    score: 88,
    status: "On Track",
    pending: 1,
    deadline: "18 days",
    risk: "Low",
  },
];

/* =========================================================
   DEADLINES
========================================================= */

const upcomingDeadlines = [
  {
    title: "GST ITC Reconciliation",
    area: "GST",
    due: "2 days",
    priority: "High",
  },
  {
    title: "TDS Reconciliation",
    area: "TDS",
    due: "6 days",
    priority: "Medium",
  },
  {
    title: "ROC Document Verification",
    area: "ROC",
    due: "9 days",
    priority: "Low",
  },
  {
    title: "Income Tax Review",
    area: "Income Tax",
    due: "18 days",
    priority: "Low",
  },
];

/* =========================================================
   RISK ALERTS
========================================================= */

const complianceAlerts = [
  {
    title: "ITC reconciliation requires attention",
    description:
      "The GST reconciliation task is currently marked as high risk.",
    severity: "High",
  },
  {
    title: "TDS reconciliation is in progress",
    description:
      "Continue monitoring the TDS records before the payment cycle.",
    severity: "Medium",
  },
  {
    title: "ROC documents are pending verification",
    description:
      "Human verification is required before completion.",
    severity: "Low",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ComplianceControlCenter() {
  const [tasks, setTasks] =
    useState<ComplianceTask[]>(initialTasks);

  const [filter, setFilter] =
    useState<"All" | ComplianceArea>("All");

  const [statusFilter, setStatusFilter] =
    useState<"All" | TaskStatus>("All");

  const [selectedTask, setSelectedTask] =
    useState<ComplianceTask | null>(null);

  const [selectedArea, setSelectedArea] =
    useState<ComplianceArea | "All">("All");

  /* =========================================================
     FILTERED TASKS
  ========================================================= */

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const areaMatches =
        filter === "All" || task.area === filter;

      const statusMatches =
        statusFilter === "All" ||
        task.status === statusFilter;

      return areaMatches && statusMatches;
    });
  }, [tasks, filter, statusFilter]);

  /* =========================================================
     METRICS
  ========================================================= */

  const openTasks = tasks.filter(
    (task) => task.status !== "Completed"
  ).length;

  const highRiskTasks = tasks.filter(
    (task) => task.risk === "High"
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const overallComplianceScore = Math.round(
    complianceAreas.reduce(
      (sum, area) => sum + area.score,
      0
    ) / complianceAreas.length
  );

  /* =========================================================
     UPDATE TASK STATUS
  ========================================================= */

  function updateTaskStatus(
    id: number,
    status: TaskStatus
  ) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status,
            }
          : task
      )
    );

    setSelectedTask((currentTask) =>
      currentTask && currentTask.id === id
        ? {
            ...currentTask,
            status,
          }
        : currentTask
    );
  }

  /* =========================================================
     CLOSE MODAL
  ========================================================= */

  function closeTask() {
    setSelectedTask(null);
  }

  /* =========================================================
     AREA CLICK
  ========================================================= */

  function handleAreaClick(
    area: ComplianceArea
  ) {
    setSelectedArea(area);
    setFilter(area);
  }

  return (
    <section
      id="control-center"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 py-32 text-white lg:px-8"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[180px]" />

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

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                <span className="text-xs text-white/50">
                  06
                </span>
              </div>

              <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                06
              </span>

            </div>

            <div className="mt-6 h-px w-16 bg-white/30" />

            <p className="mt-8 max-w-xs text-sm leading-7 text-white/30">
              Turn compliance intelligence into
              prioritized actions, assignments and
              measurable progress.
            </p>

          </div>

          <div>

            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              From insight
              <br />

              <span className="text-white/30">
                to action.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
              See every compliance issue in one place,
              understand its priority and track the
              actions required to resolve it.
            </p>

          </div>

        </div>

        {/* =====================================================
            MAIN CONTROL CENTER
        ===================================================== */}

        <div className="mt-20 overflow-hidden rounded-[28px] border border-white/10 bg-[#080808] shadow-2xl">

          {/* ===================================================
              TOP BAR
          =================================================== */}

          <div className="flex flex-col gap-4 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                <span className="text-[9px] text-white/50">
                  CC
                </span>
              </div>

              <div>

                <p className="text-[9px] font-medium text-white/60">
                  Compliance Control Center
                </p>

                <p className="mt-1 text-[7px] text-white/20">
                  Operational compliance workspace
                </p>

              </div>

            </div>

            <div className="flex items-center gap-2">

              <span className="flex items-center gap-2 rounded-full border border-emerald-400/20 px-3 py-1.5 text-[7px] text-emerald-400">

                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                SYSTEM HEALTHY

              </span>

            </div>

          </div>

          {/* ===================================================
              METRICS
          =================================================== */}

          <div className="grid border-b border-white/10 sm:grid-cols-2 lg:grid-cols-4">

            <Metric
              label="Compliance health"
              value={`${overallComplianceScore}%`}
              description="Overall workspace health"
            />

            <Metric
              label="Open actions"
              value={String(openTasks)}
              description="Require attention"
            />

            <Metric
              label="High risk"
              value={String(highRiskTasks)}
              description="Priority issues"
            />

            <Metric
              label="Completed"
              value={String(completedTasks)}
              description="Resolved actions"
            />

          </div>

          {/* ===================================================
              COMPLIANCE AREA CARDS
          =================================================== */}

          <div className="border-b border-white/10 p-6 sm:p-8">

            <div className="mb-6">

              <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                Compliance areas
              </p>

              <p className="mt-2 text-[9px] text-white/25">
                Select an area to inspect its actions.
              </p>

            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">

              {complianceAreas.map((area) => (

                <button
                  key={area.name}
                  type="button"
                  onClick={() =>
                    handleAreaClick(area.name)
                  }
                  className={`rounded-2xl border p-5 text-left transition ${
                    selectedArea === area.name
                      ? "border-white/25 bg-white/[0.07]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >

                  <div className="flex items-center justify-between">

                    <span className="text-[9px] font-medium text-white/60">
                      {area.name}
                    </span>

                    <span
                      className={`h-2 w-2 rounded-full ${
                        area.risk === "High"
                          ? "bg-red-400"
                          : area.risk === "Medium"
                          ? "bg-yellow-400"
                          : "bg-emerald-400"
                      }`}
                    />

                  </div>

                  <div className="mt-5 flex items-end justify-between">

                    <div>

                      <p className="text-2xl font-semibold text-white/70">
                        {area.score}%
                      </p>

                      <p className="mt-1 text-[7px] text-white/25">
                        {area.status}
                      </p>

                    </div>

                    <div className="text-right">

                      <p className="text-[7px] text-white/20">
                        Pending
                      </p>

                      <p className="mt-1 text-[10px] text-white/50">
                        {area.pending}
                      </p>

                    </div>

                  </div>

                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">

                    <div
                      className="h-full rounded-full bg-emerald-400/60"
                      style={{
                        width: `${area.score}%`,
                      }}
                    />

                  </div>

                  <div className="mt-3 flex items-center justify-between">

                    <span className="text-[7px] text-white/20">
                      Next deadline
                    </span>

                    <span className="text-[7px] text-white/40">
                      {area.deadline}
                    </span>

                  </div>

                </button>

              ))}

            </div>

          </div>

          {/* ===================================================
              OVERALL HEALTH
          =================================================== */}

          <div className="border-b border-white/10 p-6 sm:p-8">

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                  Compliance health
                </p>

                <div className="mt-3 flex items-end gap-3">

                  <span className="text-4xl font-semibold text-white/75">
                    {overallComplianceScore}%
                  </span>

                  <span className="pb-1 text-[8px] text-emerald-400">
                    Healthy
                  </span>

                </div>

              </div>

              <div className="w-full max-w-md">

                <div className="flex items-center justify-between text-[7px] text-white/20">

                  <span>
                    Overall compliance
                  </span>

                  <span>
                    {overallComplianceScore} / 100
                  </span>

                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">

                  <div
                    className="h-full rounded-full bg-emerald-400/60 transition-all"
                    style={{
                      width: `${overallComplianceScore}%`,
                    }}
                  />

                </div>

              </div>

            </div>

          </div>

          {/* ===================================================
              FILTERS
          =================================================== */}

          <div className="border-b border-white/10 p-6 sm:p-8">

            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                  Action queue
                </p>

                <p className="mt-2 text-[9px] text-white/25">
                  Prioritized actions detected across
                  the compliance workspace.
                </p>

              </div>

              <div className="flex flex-wrap gap-2">

                <FilterButton
                  active={filter === "All"}
                  onClick={() => {
                    setFilter("All");
                    setSelectedArea("All");
                  }}
                >
                  All
                </FilterButton>

                <FilterButton
                  active={filter === "GST"}
                  onClick={() => {
                    setFilter("GST");
                    setSelectedArea("GST");
                  }}
                >
                  GST
                </FilterButton>

                <FilterButton
                  active={filter === "TDS"}
                  onClick={() => {
                    setFilter("TDS");
                    setSelectedArea("TDS");
                  }}
                >
                  TDS
                </FilterButton>

                <FilterButton
                  active={filter === "ROC"}
                  onClick={() => {
                    setFilter("ROC");
                    setSelectedArea("ROC");
                  }}
                >
                  ROC
                </FilterButton>

                <FilterButton
                  active={filter === "Income Tax"}
                  onClick={() => {
                    setFilter("Income Tax");
                    setSelectedArea("Income Tax");
                  }}
                >
                  Income Tax
                </FilterButton>

              </div>

            </div>

            {/* STATUS FILTER */}

            <div className="mt-4 flex flex-wrap gap-2">

              <FilterButton
                active={statusFilter === "All"}
                onClick={() => setStatusFilter("All")}
              >
                All statuses
              </FilterButton>

              <FilterButton
                active={statusFilter === "Open"}
                onClick={() => setStatusFilter("Open")}
              >
                Open
              </FilterButton>

              <FilterButton
                active={statusFilter === "In Progress"}
                onClick={() =>
                  setStatusFilter("In Progress")
                }
              >
                In progress
              </FilterButton>

              <FilterButton
                active={statusFilter === "Completed"}
                onClick={() =>
                  setStatusFilter("Completed")
                }
              >
                Completed
              </FilterButton>

            </div>

          </div>

          {/* ===================================================
              TASK LIST
          =================================================== */}

          <div className="p-6 sm:p-8">

            <div className="space-y-3">

              {filteredTasks.map((task) => (

                <TaskCard
                  key={task.id}
                  task={task}
                  onOpen={() =>
                    setSelectedTask(task)
                  }
                  onStatusChange={(status) =>
                    updateTaskStatus(
                      task.id,
                      status
                    )
                  }
                />

              ))}

            </div>

            {filteredTasks.length === 0 && (

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-12 text-center">

                <p className="text-sm text-white/40">
                  No actions found.
                </p>

                <p className="mt-2 text-[8px] text-white/20">
                  Try another compliance area or status.
                </p>

              </div>

            )}

          </div>

          {/* ===================================================
              DEADLINES + RISK ALERTS
          =================================================== */}

          <div className="grid grid-cols-1 gap-px border-t border-white/10 bg-white/10 lg:grid-cols-2">

            {/* DEADLINES */}

            <div className="bg-[#080808] p-6 sm:p-8">

              <div>

                <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                  Upcoming deadlines
                </p>

                <p className="mt-2 text-[9px] text-white/25">
                  Prioritized compliance activities.
                </p>

              </div>

              <div className="mt-5 space-y-3">

                {upcomingDeadlines.map(
                  (deadline) => (

                    <div
                      key={deadline.title}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4"
                    >

                      <div>

                        <p className="text-[9px] text-white/55">
                          {deadline.title}
                        </p>

                        <p className="mt-1 text-[7px] text-white/20">
                          {deadline.area}
                        </p>

                      </div>

                      <div className="text-right">

                        <p className="text-[9px] text-white/50">
                          {deadline.due}
                        </p>

                        <p
                          className={`mt-1 text-[6px] uppercase tracking-wider ${
                            deadline.priority ===
                            "High"
                              ? "text-red-400"
                              : deadline.priority ===
                                "Medium"
                              ? "text-yellow-400"
                              : "text-emerald-400"
                          }`}
                        >
                          {deadline.priority}
                        </p>

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>

            {/* RISK ALERTS */}

            <div className="bg-[#080808] p-6 sm:p-8">

              <div>

                <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                  Risk alerts
                </p>

                <p className="mt-2 text-[9px] text-white/25">
                  Items requiring attention.
                </p>

              </div>

              <div className="mt-5 space-y-3">

                {complianceAlerts.map(
                  (alert) => (

                    <div
                      key={alert.title}
                      className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                    >

                      <div className="flex items-start gap-3">

                        <span
                          className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
                            alert.severity ===
                            "High"
                              ? "bg-red-400"
                              : alert.severity ===
                                "Medium"
                              ? "bg-yellow-400"
                              : "bg-emerald-400"
                          }`}
                        />

                        <div>

                          <p className="text-[9px] text-white/55">
                            {alert.title}
                          </p>

                          <p className="mt-2 text-[7px] leading-5 text-white/25">
                            {alert.description}
                          </p>

                          <p
                            className={`mt-2 text-[6px] uppercase tracking-wider ${
                              alert.severity ===
                              "High"
                                ? "text-red-400"
                                : alert.severity ===
                                  "Medium"
                                ? "text-yellow-400"
                                : "text-emerald-400"
                            }`}
                          >
                            {alert.severity} priority
                          </p>

                        </div>

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

          {/* ===================================================
              AI RECOMMENDATION
          =================================================== */}

          <div className="border-t border-white/10 p-6 sm:p-8">

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">

              <div className="flex items-start gap-4">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">

                  <span className="text-[9px] text-white/50">
                    AI
                  </span>

                </div>

                <div>

                  <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                    AI recommendation
                  </p>

                  <p className="mt-3 max-w-3xl text-[10px] leading-6 text-white/45">
                    Prioritize ITC reconciliation first,
                    followed by missing client documents.
                    TDS reconciliation should remain under
                    active monitoring until the next payment
                    cycle.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setFilter("GST");
                      setSelectedArea("GST");
                    }}
                    className="mt-4 rounded-lg border border-white/10 px-4 py-2 text-[8px] text-white/40 transition hover:border-white/20 hover:text-white/70"
                  >
                    Review recommended actions →
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            VALUE STATEMENT
        ===================================================== */}

        <div className="mt-24 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">

          <Value
            number="01"
            title="Prioritize"
            text="Automatically surface the compliance actions that need attention first."
          />

          <Value
            number="02"
            title="Assign"
            text="Give every compliance action an owner and a clear operational responsibility."
          />

          <Value
            number="03"
            title="Track"
            text="Move actions from open to in progress to completed and maintain visibility."
          />

        </div>

      </div>

      {/* =====================================================
          TASK DETAIL MODAL
      ===================================================== */}

      {selectedTask && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
          onClick={closeTask}
        >

          <div
            className="w-full max-w-lg rounded-3xl border border-white/10 bg-[#0b0b0b] p-6 shadow-2xl sm:p-8"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="flex items-start justify-between gap-5">

              <div>

                <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                  Compliance action
                </p>

                <h3 className="mt-3 text-xl font-medium text-white/75">
                  {selectedTask.title}
                </h3>

              </div>

              <button
                type="button"
                onClick={closeTask}
                className="text-sm text-white/25 transition hover:text-white/70"
              >
                ×
              </button>

            </div>

            <p className="mt-5 text-[10px] leading-6 text-white/35">
              {selectedTask.description}
            </p>

            {/* TASK INFORMATION */}

            <div className="mt-6 grid grid-cols-2 gap-3">

              <Info
                label="Area"
                value={selectedTask.area}
              />

              <Info
                label="Risk"
                value={selectedTask.risk}
              />

              <Info
                label="Due"
                value={selectedTask.due}
              />

              <Info
                label="Owner"
                value={selectedTask.owner}
              />

            </div>

            {/* STATUS */}

            <div className="mt-6">

              <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                Update status
              </p>

              <div className="mt-3 grid gap-2 sm:grid-cols-3">

                <StatusButton
                  active={
                    selectedTask.status ===
                    "Open"
                  }
                  onClick={() =>
                    updateTaskStatus(
                      selectedTask.id,
                      "Open"
                    )
                  }
                >
                  Open
                </StatusButton>

                <StatusButton
                  active={
                    selectedTask.status ===
                    "In Progress"
                  }
                  onClick={() =>
                    updateTaskStatus(
                      selectedTask.id,
                      "In Progress"
                    )
                  }
                >
                  In progress
                </StatusButton>

                <StatusButton
                  active={
                    selectedTask.status ===
                    "Completed"
                  }
                  onClick={() =>
                    updateTaskStatus(
                      selectedTask.id,
                      "Completed"
                    )
                  }
                >
                  Completed
                </StatusButton>

              </div>

            </div>

            {/* CLOSE */}

            <button
              type="button"
              onClick={closeTask}
              className="mt-6 w-full rounded-xl border border-white/10 px-4 py-3 text-[8px] text-white/30 transition hover:border-white/20 hover:text-white/60"
            >
              Close
            </button>

          </div>

        </div>

      )}

    </section>
  );
}

/* =========================================================
   METRIC
========================================================= */

function Metric({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="border-b border-white/10 p-6 sm:p-7 lg:border-b-0 lg:border-r last:border-r-0">

      <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
        {label}
      </p>

      <p className="mt-4 text-2xl font-semibold text-white/70">
        {value}
      </p>

      <p className="mt-2 text-[7px] text-white/20">
        {description}
      </p>

    </div>
  );
}

/* =========================================================
   FILTER BUTTON
========================================================= */

function FilterButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-[8px] transition ${
        active
          ? "border-white/20 bg-white/[0.07] text-white/70"
          : "border-white/10 bg-white/[0.02] text-white/25 hover:border-white/20 hover:text-white/50"
      }`}
    >
      {children}
    </button>
  );
}

/* =========================================================
   TASK CARD
========================================================= */

function TaskCard({
  task,
  onOpen,
  onStatusChange,
}: {
  task: ComplianceTask;
  onOpen: () => void;
  onStatusChange: (status: TaskStatus) => void;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-white/20 hover:bg-white/[0.035]">

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-start gap-4">

          <div
            className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
              task.risk === "High"
                ? "bg-red-400"
                : task.risk === "Medium"
                ? "bg-yellow-400"
                : "bg-emerald-400"
            }`}
          />

          <div>

            <div className="flex flex-wrap items-center gap-2">

              <h4 className="text-[10px] font-medium text-white/65">
                {task.title}
              </h4>

              <span className="rounded-full border border-white/10 px-2 py-1 text-[6px] text-white/25">
                {task.area}
              </span>

              <span className="rounded-full border border-white/10 px-2 py-1 text-[6px] text-white/25">
                {task.risk} risk
              </span>

            </div>

            <p className="mt-2 max-w-2xl text-[8px] leading-5 text-white/25">
              {task.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-4">

              <span className="text-[7px] text-white/20">
                {task.due}
              </span>

              <span className="text-[7px] text-white/20">
                Owner: {task.owner}
              </span>

            </div>

          </div>

        </div>

        <div className="flex flex-wrap items-center gap-2">

          <select
            value={task.status}
            onChange={(event) =>
              onStatusChange(
                event.target.value as TaskStatus
              )
            }
            className="rounded-lg border border-white/10 bg-[#101010] px-3 py-2 text-[8px] text-white/40 outline-none"
          >

            <option value="Open">
              Open
            </option>

            <option value="In Progress">
              In Progress
            </option>

            <option value="Completed">
              Completed
            </option>

          </select>

          <button
            type="button"
            onClick={onOpen}
            className="rounded-lg border border-white/10 px-4 py-2 text-[8px] text-white/30 transition hover:border-white/20 hover:text-white/60"
          >
            View →
          </button>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   STATUS BUTTON
========================================================= */

function StatusButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border px-3 py-3 text-[8px] transition ${
        active
          ? "border-white/20 bg-white/[0.07] text-white/70"
          : "border-white/10 text-white/25 hover:border-white/20 hover:text-white/50"
      }`}
    >
      {children}
    </button>
  );
}

/* =========================================================
   INFO
========================================================= */

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">

      <p className="text-[7px] uppercase tracking-[0.15em] text-white/20">
        {label}
      </p>

      <p className="mt-2 text-[9px] text-white/50">
        {value}
      </p>

    </div>
  );
}

/* =========================================================
   VALUE
========================================================= */

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