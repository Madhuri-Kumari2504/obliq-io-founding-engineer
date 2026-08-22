"use client";

import { useState } from "react";

type ComplianceStatus = "Healthy" | "Warning" | "At Risk";

type ComplianceItem = {
  name: string;
  percentage: number;
  status: ComplianceStatus;
};

type Task = {
  title: string;
  client: string;
  priority: "High" | "Medium" | "Low";
  due: string;
};

const complianceData: ComplianceItem[] = [
  {
    name: "GST",
    percentage: 92,
    status: "Healthy",
  },
  {
    name: "TDS",
    percentage: 84,
    status: "Healthy",
  },
  {
    name: "ROC",
    percentage: 76,
    status: "Warning",
  },
  {
    name: "Income Tax",
    percentage: 68,
    status: "At Risk",
  },
];

const tasks: Task[] = [
  {
    title: "Review ITC reconciliation",
    client: "Apex Technologies Pvt Ltd",
    priority: "High",
    due: "Today",
  },
  {
    title: "Verify client documents",
    client: "Northstar Manufacturing Pvt Ltd",
    priority: "Medium",
    due: "Tomorrow",
  },
  {
    title: "Prepare GST filing",
    client: "Verde Consulting LLP",
    priority: "Low",
    due: "Aug 26",
  },
  {
    title: "Review ROC compliance",
    client: "Orbit Retail Systems",
    priority: "High",
    due: "Aug 28",
  },
];

const navigation = [
  "Dashboard",
  "Clients",
  "Compliance",
  "Tasks",
  "Documents",
  "AI Assistant",
];

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-900">
      <div className="flex min-h-screen">
        {/* SIDEBAR */}
        <aside className="hidden w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center border-b border-slate-200 px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
                O
              </div>

              <div>
                <p className="text-lg font-semibold tracking-tight">
                  Obliq-io
                </p>
                <p className="text-[11px] text-slate-500">
                  Compliance Platform
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6">
            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Workspace
            </p>

            <div className="space-y-1">
              {navigation.map((item) => {
                const active = activeNav === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setActiveNav(item)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition ${
                      active
                        ? "bg-slate-950 font-medium text-white"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        active ? "bg-white" : "bg-slate-300"
                      }`}
                    />

                    {item}
                  </button>
                );
              })}
            </div>

            <p className="mb-3 mt-10 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              System
            </p>

            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-slate-600 transition hover:bg-slate-100"
            >
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              Settings
            </button>
          </nav>

          {/* User */}
          <div className="border-t border-slate-200 p-4">
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold">
                MK
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-medium">
                  Madhuri Kumari
                </p>
                <p className="truncate text-xs text-slate-500">
                  Administrator
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <section className="flex min-w-0 flex-1 flex-col">
          {/* TOP BAR */}
          <header className="flex min-h-20 items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-8">
            <div>
              <p className="text-xs font-medium text-slate-500">
                Workspace / Dashboard
              </p>

              <h1 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                Compliance Overview
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="hidden rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:block"
              >
                Export
              </button>

              <button
                type="button"
                className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                + Add Task
              </button>
            </div>
          </header>

          {/* DASHBOARD */}
          <div className="flex-1 p-5 sm:p-8">
            {/* Greeting */}
            <div className="mb-7">
              <p className="text-sm text-slate-500">
                Sunday, August 23, 2026
              </p>

              <h2 className="mt-1 text-2xl font-semibold tracking-tight">
                Good evening, Madhuri.
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Here is the latest overview of your compliance operations.
              </p>
            </div>

            {/* KPI CARDS */}
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                label="Total Clients"
                value="24"
                description="+3 this month"
                trend="up"
              />

              <StatCard
                label="Open Tasks"
                value="18"
                description="5 due this week"
                trend="neutral"
              />

              <StatCard
                label="Compliance Health"
                value="86%"
                description="+4.2% from last month"
                trend="up"
              />

              <StatCard
                label="At Risk"
                value="3"
                description="Requires attention"
                trend="down"
              />
            </div>

            {/* MAIN GRID */}
            <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
              {/* COMPLIANCE */}
              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      Compliance
                    </p>

                    <h3 className="mt-1 text-lg font-semibold">
                      Compliance health
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Current status across major compliance areas.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="text-xs font-medium text-slate-600 hover:text-slate-950"
                  >
                    View all
                  </button>
                </div>

                <div className="mt-6 space-y-5">
                  {complianceData.map((item) => (
                    <div key={item.name}>
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">
                            {item.name}
                          </span>

                          <StatusBadge status={item.status} />
                        </div>

                        <span className="text-sm font-semibold">
                          {item.percentage}%
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-slate-900 transition-all"
                          style={{
                            width: `${item.percentage}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* AI ASSISTANT */}
              <section className="rounded-2xl bg-slate-950 p-6 text-white shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      AI Workspace
                    </p>

                    <h3 className="mt-1 text-lg font-semibold">
                      Compliance Assistant
                    </h3>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                    ✦
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-300">
                  Ask questions about compliance deadlines, client tasks,
                  documents or operational risks.
                </p>

                <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs text-slate-400">
                    Suggested question
                  </p>

                  <p className="mt-2 text-sm">
                    Which compliance tasks need attention this week?
                  </p>
                </div>

                <button
                  type="button"
                  className="mt-5 w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Open AI Assistant
                </button>
              </section>
            </div>

            {/* LOWER GRID */}
            <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
              {/* TASKS */}
              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      Operations
                    </p>

                    <h3 className="mt-1 text-lg font-semibold">
                      Recent tasks
                    </h3>
                  </div>

                  <button
                    type="button"
                    className="text-xs font-medium text-slate-600 hover:text-slate-950"
                  >
                    View tasks
                  </button>
                </div>

                <div className="mt-5 divide-y divide-slate-100">
                  {tasks.map((task) => (
                    <div
                      key={task.title}
                      className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">
                          {task.title}
                        </p>

                        <p className="mt-1 truncate text-xs text-slate-500">
                          {task.client}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <PriorityBadge priority={task.priority} />

                        <span className="text-xs text-slate-400">
                          {task.due}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ACTIVITY */}
              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Activity
                  </p>

                  <h3 className="mt-1 text-lg font-semibold">
                    Recent activity
                  </h3>
                </div>

                <div className="mt-5 space-y-5">
                  <Activity
                    title="GST documents uploaded"
                    description="Apex Technologies"
                    time="12 min ago"
                  />

                  <Activity
                    title="Task marked completed"
                    description="Northstar Manufacturing"
                    time="48 min ago"
                  />

                  <Activity
                    title="Compliance warning detected"
                    description="Verde Consulting LLP"
                    time="2 hrs ago"
                  />

                  <Activity
                    title="New client added"
                    description="Orbit Retail Systems"
                    time="Yesterday"
                  />
                </div>
              </section>
            </div>

            {/* CLIENT OVERVIEW */}
            <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Client360
                  </p>

                  <h3 className="mt-1 text-lg font-semibold">
                    Client portfolio
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Monitor client health and compliance status from one
                    workspace.
                  </p>
                </div>

                <button
                  type="button"
                  className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium transition hover:bg-slate-50"
                >
                  View clients
                </button>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <ClientCard
                  name="Apex Technologies"
                  health="92%"
                  status="Healthy"
                />

                <ClientCard
                  name="Northstar Manufacturing"
                  health="87%"
                  status="Healthy"
                />

                <ClientCard
                  name="Verde Consulting"
                  health="74%"
                  status="Warning"
                />

                <ClientCard
                  name="Orbit Retail Systems"
                  health="61%"
                  status="At Risk"
                />
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ---------------------------------- */
/* STAT CARD */
/* ---------------------------------- */

function StatCard({
  label,
  value,
  description,
  trend,
}: {
  label: string;
  value: string;
  description: string;
  trend: "up" | "down" | "neutral";
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="mt-3 text-3xl font-semibold tracking-tight">{value}</p>

      <p
        className={`mt-2 text-xs ${
          trend === "up"
            ? "text-emerald-600"
            : trend === "down"
              ? "text-amber-600"
              : "text-slate-500"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

/* ---------------------------------- */
/* STATUS BADGE */
/* ---------------------------------- */

function StatusBadge({ status }: { status: ComplianceStatus }) {
  const styles = {
    Healthy: "bg-emerald-50 text-emerald-700",
    Warning: "bg-amber-50 text-amber-700",
    "At Risk": "bg-red-50 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-2 py-1 text-[10px] font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}

/* ---------------------------------- */
/* PRIORITY BADGE */
/* ---------------------------------- */

function PriorityBadge({
  priority,
}: {
  priority: "High" | "Medium" | "Low";
}) {
  const styles = {
    High: "bg-red-50 text-red-700",
    Medium: "bg-amber-50 text-amber-700",
    Low: "bg-slate-100 text-slate-600",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${styles[priority]}`}
    >
      {priority}
    </span>
  );
}

/* ---------------------------------- */
/* ACTIVITY */
/* ---------------------------------- */

function Activity({
  title,
  description,
  time,
}: {
  title: string;
  description: string;
  time: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-slate-900" />

      <div className="min-w-0">
        <p className="text-sm font-medium">{title}</p>

        <p className="mt-1 text-xs text-slate-500">{description}</p>

        <p className="mt-1 text-[11px] text-slate-400">{time}</p>
      </div>
    </div>
  );
}

/* ---------------------------------- */
/* CLIENT CARD */
/* ---------------------------------- */

function ClientCard({
  name,
  health,
  status,
}: {
  name: string;
  health: string;
  status: ComplianceStatus;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-4 transition hover:border-slate-300 hover:shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-semibold">
          {name
            .split(" ")
            .map((word) => word[0])
            .slice(0, 2)
            .join("")}
        </div>

        <StatusBadge status={status} />
      </div>

      <p className="mt-4 text-sm font-medium">{name}</p>

      <div className="mt-3">
        <div className="mb-1 flex justify-between text-xs">
          <span className="text-slate-400">Health</span>
          <span className="font-medium">{health}</span>
        </div>

        <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-slate-900"
            style={{
              width: health,
            }}
          />
        </div>
      </div>
    </div>
  );
}