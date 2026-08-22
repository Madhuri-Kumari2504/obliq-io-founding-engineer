"use client";

import { useState } from "react";

type Client = {
  name: string;
  initials: string;
  industry: string;
  health: number;
  risk: "Low" | "Medium" | "High";
  tasks: number;
  deadlines: number;
  gst: number;
  tds: number;
  roc: number;
  incomeTax: number;
  documents: number;
};

type Task = {
  title: string;
  priority: string;
};

const clients: Client[] = [
  {
    name: "Apex Technologies Pvt Ltd",
    initials: "AT",
    industry: "Software & Technology",
    health: 98.4,
    risk: "Low",
    tasks: 3,
    deadlines: 5,
    gst: 98,
    tds: 96,
    roc: 100,
    incomeTax: 94,
    documents: 97,
  },
  {
    name: "Northstar Manufacturing Pvt Ltd",
    initials: "NM",
    industry: "Manufacturing",
    health: 91.7,
    risk: "Medium",
    tasks: 7,
    deadlines: 8,
    gst: 91,
    tds: 82,
    roc: 95,
    incomeTax: 88,
    documents: 76,
  },
  {
    name: "Verde Consulting LLP",
    initials: "VC",
    industry: "Professional Services",
    health: 99.1,
    risk: "Low",
    tasks: 2,
    deadlines: 3,
    gst: 100,
    tds: 98,
    roc: 96,
    incomeTax: 99,
    documents: 100,
  },
  {
    name: "Orbit Retail Systems",
    initials: "OR",
    industry: "Retail",
    health: 78.6,
    risk: "High",
    tasks: 11,
    deadlines: 9,
    gst: 72,
    tds: 68,
    roc: 88,
    incomeTax: 74,
    documents: 61,
  },
];

const complianceItems = [
  {
    id: "GST",
    name: "Goods & Services Tax",
    description: "Returns, reconciliation & filings",
    icon: "G",
  },
  {
    id: "TDS",
    name: "Tax Deducted at Source",
    description: "Payments, returns & certificates",
    icon: "T",
  },
  {
    id: "ROC",
    name: "Corporate Compliance",
    description: "ROC filings & annual obligations",
    icon: "R",
  },
  {
    id: "IT",
    name: "Income Tax",
    description: "Returns, notices & assessments",
    icon: "I",
  },
];

const activity = [
  {
    time: "09:42",
    title: "GSTR-3B validated",
    description: "Return successfully checked by AI",
    type: "success",
  },
  {
    time: "09:17",
    title: "Invoice INV-2847 processed",
    description: "Document extracted and classified",
    type: "document",
  },
  {
    time: "08:51",
    title: "Client uploaded documents",
    description: "4 new documents received",
    type: "upload",
  },
  {
    time: "08:26",
    title: "Deadline monitoring updated",
    description: "Next filing due in 3 days",
    type: "system",
  },
];

export default function Client360() {
  /* ================================================== */
  /* STATE */
  /* ================================================== */

  const [selectedClient, setSelectedClient] = useState(0);
  const [activeCompliance, setActiveCompliance] = useState("GST");
  const [showAllActivity, setShowAllActivity] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [taskPriority, setTaskPriority] = useState("Medium");

  const [aiQuery, setAiQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isAiThinking, setIsAiThinking] = useState(false);

  const [tasks, setTasks] = useState<Task[]>([
    {
      title: "Review ITC reconciliation",
      priority: "High",
    },
    {
      title: "Verify client documents",
      priority: "Medium",
    },
    {
      title: "Prepare GST filing",
      priority: "Low",
    },
  ]);

  const [showDocuments, setShowDocuments] = useState(false);

  const [showMessage, setShowMessage] = useState(false);

  const [showAIReasoning, setShowAIReasoning] = useState(false);

  const [showExport, setShowExport] = useState(false);

  const [toast, setToast] = useState("");

  const [taskFilter, setTaskFilter] = useState("All");

  /* ================================================== */
  /* CURRENT CLIENT */
  /* ================================================== */

  const client = clients[selectedClient];

  /* ================================================== */
  /* TOAST */
  /* ================================================== */

  const showToast = (message: string) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  /* ================================================== */
  /* ADD TASK */
  /* ================================================== */

  const handleAddTask = () => {
    if (!newTask.trim()) {
      showToast("Please enter a task title.");
      return;
    }

    const task: Task = {
      title: newTask.trim(),
      priority: taskPriority,
    };

    setTasks((currentTasks) => [...currentTasks, task]);

    setNewTask("");

    setTaskPriority("Medium");

    setShowTaskModal(false);

    showToast("Task created successfully.");
  };

  /* ================================================== */
  /* FILTER TASKS */
  /* ================================================== */

  const filteredTasks =
    taskFilter === "All"
      ? tasks
      : tasks.filter((task) => task.priority === taskFilter);

  /* ================================================== */
  /* EXPORT */
  /* ================================================== */

  const handleExport = () => {
    setShowExport(true);
  };

  /* ================================================== */
  /* RENDER */
  /* ================================================== */

  return (
    <section
      id="client-360"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 py-32 text-white lg:px-8"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[180px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.015]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* ================================================== */}
        {/* HEADER */}
        {/* ================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                <span className="text-xs text-white/50">08</span>
              </div>

              <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                07
              </span>
            </div>

            <div className="mt-6 h-px w-16 bg-white/30" />

            <p className="mt-8 max-w-xs text-sm leading-7 text-white/30">
              Move from a portfolio-level view into the complete operational
              picture of any client.
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Every client.
              <br />

              <span className="text-white/30">
                Completely understood.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
              Client 360° connects compliance, documents, deadlines, risks,
              tasks and activity into one continuously updated workspace.
            </p>
          </div>
        </div>

        {/* ================================================== */}
        {/* APPLICATION */}
        {/* ================================================== */}

        <div className="mt-20 overflow-hidden rounded-[28px] border border-white/10 bg-[#080808] shadow-2xl">
          {/* TOP APPLICATION BAR */}

          <div className="flex flex-col gap-5 border-b border-white/10 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                <span className="text-[9px] font-medium text-white/40">
                  O
                </span>
              </div>

              <div>
                <p className="text-[9px] font-medium text-white/60">
                  Client 360°
                </p>

                <p className="text-[7px] text-white/20">
                  Compliance workspace
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center gap-2 rounded-full border border-emerald-400/20 px-3 py-1.5 text-[7px] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                LIVE
              </span>

              {/* EXPORT */}

              <button
                type="button"
                onClick={handleExport}
                className="rounded-lg border border-white/10 px-3 py-2 text-[8px] text-white/30 transition hover:border-white/20 hover:text-white/70"
              >
                Export
              </button>

              {/* ADD TASK */}

              <button
                type="button"
                onClick={() => setShowTaskModal(true)}
                className="rounded-lg bg-white px-3 py-2 text-[8px] text-black transition hover:bg-white/80"
              >
                Add task
              </button>
            </div>
          </div>

          {/* ================================================== */}
          {/* CLIENT SELECTOR */}
          {/* ================================================== */}

          <div className="border-b border-white/10 px-5 py-5 sm:px-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <span className="text-xs text-white/50">
                    {client.initials}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-white/70">
                    {client.name}
                  </h3>

                  <p className="mt-1 text-[8px] text-white/20">
                    {client.industry} · Client ID OBQ-
                    {selectedClient + 1042}
                  </p>
                </div>
              </div>

              {/* SWITCH CLIENT */}

              <div className="flex items-center gap-2">
                <span className="text-[8px] text-white/20">
                  Switch client
                </span>

                <select
                  value={selectedClient}
                  onChange={(e) =>
                    setSelectedClient(Number(e.target.value))
                  }
                  className="appearance-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[8px] text-white/50 outline-none transition hover:border-white/20"
                >
                  {clients.map((item, index) => (
                    <option
                      key={item.name}
                      value={index}
                      className="bg-[#111] text-white"
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* ================================================== */}
          {/* KPI GRID */}
          {/* ================================================== */}

          <div className="grid border-b border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            <KPI
              label="Compliance health"
              value={`${client.health}%`}
              change="+2.8%"
            />

            <KPI
              label="Risk level"
              value={client.risk}
              change="AI assessed"
            />

            <KPI
              label="Open tasks"
              value={String(tasks.length).padStart(2, "0")}
              change="Action required"
            />

            <KPI
              label="Upcoming deadlines"
              value={String(client.deadlines).padStart(2, "0")}
              change="Next 30 days"
            />
          </div>

          {/* ================================================== */}
          {/* MAIN GRID */}
          {/* ================================================== */}

          <div className="grid lg:grid-cols-[1.4fr_0.6fr]">
            {/* LEFT */}

            <div className="border-b border-white/10 lg:border-b-0 lg:border-r">
              {/* COMPLIANCE */}

              <div className="border-b border-white/10 p-6 sm:p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                      Compliance coverage
                    </p>

                    <h3 className="mt-2 text-base font-medium text-white/60">
                      Regulatory obligations
                    </h3>
                  </div>

                  <span className="text-[8px] text-white/20">
                    Updated 2 min ago
                  </span>
                </div>

                {/* TABS */}

                <div className="mt-7 flex gap-2 overflow-x-auto pb-1">
                  {complianceItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setActiveCompliance(item.id);
                        showToast(`${item.id} compliance selected.`);
                      }}
                      className={`flex min-w-fit items-center gap-2 rounded-lg border px-3 py-2.5 text-[8px] transition ${
                        activeCompliance === item.id
                          ? "border-white/20 bg-white/[0.07] text-white/70"
                          : "border-white/10 text-white/25 hover:text-white/50"
                      }`}
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded bg-white/5 text-[7px]">
                        {item.icon}
                      </span>

                      {item.id}
                    </button>
                  ))}
                </div>

                {/* SELECTED COMPLIANCE */}

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  {activeCompliance === "GST" && (
                    <ComplianceDetail
                      title="Goods & Services Tax"
                      subtitle="GST compliance workspace"
                      score={client.gst}
                      items={[
                        ["GSTR-1", "Filed", "success"],
                        ["GSTR-3B", "Validated", "success"],
                        ["GSTR-2B", "Reconciled", "success"],
                        ["ITC Reconciliation", "Review", "warning"],
                      ]}
                    />
                  )}

                  {activeCompliance === "TDS" && (
                    <ComplianceDetail
                      title="Tax Deducted at Source"
                      subtitle="TDS compliance workspace"
                      score={client.tds}
                      items={[
                        ["Q1 Payment", "Completed", "success"],
                        ["Q1 Return", "Filed", "success"],
                        ["Q2 Reconciliation", "Review", "warning"],
                        ["Certificates", "Generated", "success"],
                      ]}
                    />
                  )}

                  {activeCompliance === "ROC" && (
                    <ComplianceDetail
                      title="Corporate Compliance"
                      subtitle="ROC compliance workspace"
                      score={client.roc}
                      items={[
                        ["Annual Return", "Filed", "success"],
                        ["Director KYC", "Completed", "success"],
                        ["Company Master", "Verified", "success"],
                        ["Next Filing", "Upcoming", "info"],
                      ]}
                    />
                  )}

                  {activeCompliance === "IT" && (
                    <ComplianceDetail
                      title="Income Tax"
                      subtitle="Income tax compliance workspace"
                      score={client.incomeTax}
                      items={[
                        ["Return Preparation", "On track", "success"],
                        ["Tax Computation", "Validated", "success"],
                        ["Notices", "None", "success"],
                        ["Advance Tax", "Upcoming", "info"],
                      ]}
                    />
                  )}
                </div>
              </div>

              {/* DOCUMENT INTELLIGENCE */}

              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                      Document intelligence
                    </p>

                    <h3 className="mt-2 text-base font-medium text-white/60">
                      Document status
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowDocuments(true)}
                    className="text-[8px] text-white/25 transition hover:text-white/60"
                  >
                    View all →
                  </button>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <DocumentCard
                    label="Processed"
                    value="128"
                    description="AI extracted"
                  />

                  <DocumentCard
                    label="Missing"
                    value="02"
                    description="Action required"
                  />

                  <DocumentCard
                    label="Review"
                    value="01"
                    description="Human verification"
                  />
                </div>
              </div>
            </div>

            {/* ================================================== */}
            {/* RIGHT PANEL */}
            {/* ================================================== */}

            <div>
              {/* AI INSIGHT */}

              <div className="border-b border-white/10 p-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-[8px]">
                    AI
                  </span>

                  <div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                      Obliq intelligence
                    </p>

                    <p className="mt-1 text-[9px] text-white/50">
                      Latest insight
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                    <span className="text-[7px] uppercase tracking-wider text-emerald-400">
                      Low risk
                    </span>
                  </div>

                  <p className="mt-4 text-[10px] leading-5 text-white/50">
                    No critical compliance exceptions detected. One ITC
                    reconciliation item should be reviewed before the next
                    GST filing.
                  </p>

                  <button
                    type="button"
                    onClick={() => setShowAIReasoning(true)}
                    className="mt-4 text-[8px] text-white/30 transition hover:text-white/60"
                  >
                    View AI reasoning →
                  </button>
                </div>
              </div>

              {/* DEADLINES */}

              <div className="border-b border-white/10 p-6">
                <div className="flex items-center justify-between">
                  <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                    Upcoming
                  </p>

                  <span className="text-[7px] text-white/20">
                    {client.deadlines} deadlines
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  <MiniDeadline
                    date="18 AUG"
                    title="GSTR-1"
                    status="Today"
                  />

                  <MiniDeadline
                    date="20 AUG"
                    title="GSTR-3B"
                    status="2 days"
                  />

                  <MiniDeadline
                    date="25 AUG"
                    title="TDS Payment"
                    status="7 days"
                  />
                </div>
              </div>

              {/* CLIENT CONTACT */}

              <div className="p-6">
                <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                  Client relationship
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <span className="text-[8px] text-white/40">RK</span>
                  </div>

                  <div>
                    <p className="text-[9px] text-white/50">
                      Rahul Kapoor
                    </p>

                    <p className="mt-1 text-[7px] text-white/20">
                      Finance Director
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setShowMessage(true)}
                    className="rounded-lg border border-white/10 py-2.5 text-[7px] text-white/30 transition hover:text-white/60"
                  >
                    Message
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowDocuments(true)}
                    className="rounded-lg border border-white/10 py-2.5 text-[7px] text-white/30 transition hover:text-white/60"
                  >
                    Documents
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================== */}
          {/* TASKS */}
          {/* ================================================== */}

          <div className="border-t border-white/10 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                  Tasks
                </p>

                <h3 className="mt-2 text-base font-medium text-white/60">
                  Client action items
                </h3>
              </div>

              <div className="flex gap-2">
                {["All", "Low", "Medium", "High"].map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setTaskFilter(filter)}
                    className={`rounded-lg border px-3 py-2 text-[7px] transition ${
                      taskFilter === filter
                        ? "border-white/20 bg-white/10 text-white"
                        : "border-white/10 text-white/25 hover:text-white/60"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {filteredTasks.map((task, index) => (
                <div
                  key={`${task.title}-${index}`}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] text-white/50">
                      {task.title}
                    </span>

                    <span
                      className={`text-[7px] ${
                        task.priority === "High"
                          ? "text-red-400"
                          : task.priority === "Medium"
                            ? "text-yellow-400"
                            : "text-emerald-400"
                      }`}
                    >
                      {task.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================================================== */}
          {/* ACTIVITY */}
          {/* ================================================== */}

          <div className="border-t border-white/10 p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                  Activity
                </p>

                <h3 className="mt-2 text-base font-medium text-white/60">
                  Everything happening with this client
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setShowAllActivity(!showAllActivity)}
                className="text-[8px] text-white/25 transition hover:text-white/60"
              >
                {showAllActivity
                  ? "Collapse ↑"
                  : "View timeline →"}
              </button>
            </div>

            <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {(showAllActivity
                ? [...activity, ...activity]
                : activity
              ).map((item, index) => (
                <ActivityItem
                  key={`${item.title}-${index}`}
                  {...item}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* VALUE STATEMENT */}
        {/* ================================================== */}

        <div className="mt-24 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
          <Value
            number="01"
            title="One client record"
            text="Every filing, document, task, deadline and interaction stays connected."
          />

          <Value
            number="02"
            title="AI-powered context"
            text="Obliq continuously analyzes client activity and surfaces what matters."
          />

          <Value
            number="03"
            title="Zero blind spots"
            text="Know what is complete, what is missing and what needs attention."
          />
        </div>
      </div>

      {/* ================================================== */}
      {/* ADD TASK MODAL */}
      {/* ================================================== */}

      {showTaskModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={() => setShowTaskModal(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                  Task management
                </p>

                <h3 className="mt-2 text-lg font-medium text-white/80">
                  Create new task
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setShowTaskModal(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/40 transition hover:bg-white/5 hover:text-white"
              >
                ×
              </button>
            </div>

            <div className="mt-6">
              <label className="text-[8px] uppercase tracking-wider text-white/25">
                Task title
              </label>

              <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddTask();
                  }
                }}
                placeholder="e.g. Review GST reconciliation"
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-white outline-none placeholder:text-white/15 focus:border-white/30"
                autoFocus
              />
            </div>

            <div className="mt-5">
              <label className="text-[8px] uppercase tracking-wider text-white/25">
                Priority
              </label>

              <div className="mt-2 grid grid-cols-3 gap-2">
                {["Low", "Medium", "High"].map((priority) => (
                  <button
                    key={priority}
                    type="button"
                    onClick={() => setTaskPriority(priority)}
                    className={`rounded-lg border px-3 py-2.5 text-[8px] transition ${
                      taskPriority === priority
                        ? "border-white/30 bg-white/10 text-white"
                        : "border-white/10 text-white/30 hover:text-white/60"
                    }`}
                  >
                    {priority}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setShowTaskModal(false);
                  setNewTask("");
                  setTaskPriority("Medium");
                }}
                className="flex-1 rounded-lg border border-white/10 py-3 text-[8px] text-white/30 transition hover:text-white"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleAddTask}
                className="flex-1 rounded-lg bg-white py-3 text-[8px] font-medium text-black transition hover:bg-white/80"
              >
                Create task
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================================================== */}
      {/* DOCUMENTS MODAL */}
      {/* ================================================== */}

      {showDocuments && (
        <SimpleModal
          title="Client documents"
          subtitle="Document intelligence workspace"
          onClose={() => setShowDocuments(false)}
        >
          <div className="space-y-3">
            <ModalRow
              title="GST Reconciliation"
              status="Processed"
            />

            <ModalRow
              title="Invoice INV-2847"
              status="AI extracted"
            />

            <ModalRow
              title="Bank Statement"
              status="Review required"
            />

            <ModalRow
              title="TDS Certificate"
              status="Verified"
            />
          </div>
        </SimpleModal>
      )}

      {/* ================================================== */}
      {/* MESSAGE MODAL */}
      {/* ================================================== */}

      {showMessage && (
        <SimpleModal
          title="Message client"
          subtitle={`Contact ${client.name}`}
          onClose={() => setShowMessage(false)}
        >
          <textarea
            placeholder="Write a message..."
            className="h-32 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] p-4 text-xs text-white outline-none placeholder:text-white/20 focus:border-white/30"
          />

          <button
            type="button"
            onClick={() => {
              setShowMessage(false);
              showToast("Message sent successfully.");
            }}
            className="mt-4 w-full rounded-xl bg-white py-3 text-[8px] font-medium text-black transition hover:bg-white/80"
          >
            Send message
          </button>
        </SimpleModal>
      )}

      {/* ================================================== */}
      {/* AI REASONING MODAL */}
      {/* ================================================== */}

      {showAIReasoning && (
        <SimpleModal
          title="AI reasoning"
          subtitle="Why Obliq classified this client as low risk"
          onClose={() => setShowAIReasoning(false)}
        >
          <div className="space-y-3">
            <Reason
              title="Compliance health"
              text={`Current compliance score is ${client.health}%.`}
            />

            <Reason
              title="GST status"
              text={`${client.gst}% GST compliance with one reconciliation item requiring review.`}
            />

            <Reason
              title="Risk assessment"
              text="No critical compliance exceptions were detected."
            />
          </div>
        </SimpleModal>
      )}

      {/* ================================================== */}
      {/* EXPORT MODAL */}
      {/* ================================================== */}

      {showExport && (
        <SimpleModal
          title="Export client report"
          subtitle="Generate a Client 360° summary"
          onClose={() => setShowExport(false)}
        >
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <p className="text-[9px] text-white/50">
              Client
            </p>

            <p className="mt-2 text-xs text-white/70">
              {client.name}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <ModalStat
                label="Health"
                value={`${client.health}%`}
              />

              <ModalStat
                label="Risk"
                value={client.risk}
              />

              <ModalStat
                label="Tasks"
                value={String(tasks.length)}
              />

              <ModalStat
                label="Deadlines"
                value={String(client.deadlines)}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setShowExport(false);
              showToast("Report prepared successfully.");
            }}
            className="mt-4 w-full rounded-xl bg-white py-3 text-[8px] font-medium text-black transition hover:bg-white/80"
          >
            Generate report
          </button>
        </SimpleModal>
      )}

      {/* ================================================== */}
      {/* TOAST */}
      {/* ================================================== */}

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-[200] -translate-x-1/2 rounded-xl border border-white/10 bg-[#111] px-5 py-3 text-[9px] text-white/70 shadow-2xl">
          {toast}
        </div>
      )}
    </section>
  );
}

/* ========================================================= */
/* KPI */
/* ========================================================= */

function KPI({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change: string;
}) {
  return (
    <div className="border-b border-white/10 p-5 last:border-b-0 sm:border-r lg:border-b-0">
      <p className="text-[8px] text-white/20">
        {label}
      </p>

      <div className="mt-4 flex items-end justify-between">
        <span className="text-xl font-semibold tracking-tight text-white/70">
          {value}
        </span>

        <span className="text-[7px] text-emerald-400">
          {change}
        </span>
      </div>
    </div>
  );
}

/* ========================================================= */
/* COMPLIANCE DETAIL */
/* ========================================================= */

function ComplianceDetail({
  title,
  subtitle,
  score,
  items,
}: {
  title: string;
  subtitle: string;
  score: number;
  items: [string, string, string][];
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm text-white/60">
            {title}
          </h4>

          <p className="mt-1 text-[8px] text-white/20">
            {subtitle}
          </p>
        </div>

        <span className="text-lg font-medium text-white/50">
          {score}%
        </span>
      </div>

      <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-white/50 transition-all duration-700"
          style={{
            width: `${score}%`,
          }}
        />
      </div>

      <div className="mt-6 space-y-2">
        {items.map(([name, status, type]) => (
          <div
            key={name}
            className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.015] px-3 py-3"
          >
            <div className="flex items-center gap-3">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  type === "success"
                    ? "bg-emerald-400"
                    : type === "warning"
                      ? "bg-yellow-400"
                      : "bg-blue-400"
                }`}
              />

              <span className="text-[8px] text-white/40">
                {name}
              </span>
            </div>

            <span className="text-[7px] text-white/20">
              {status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ========================================================= */
/* DOCUMENT CARD */
/* ========================================================= */

function DocumentCard({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-white/20 hover:bg-white/[0.04]">
      <p className="text-[8px] text-white/20">
        {label}
      </p>

      <p className="mt-3 text-xl font-medium text-white/60">
        {value}
      </p>

      <p className="mt-1 text-[7px] text-white/15">
        {description}
      </p>
    </div>
  );
}

/* ========================================================= */
/* MINI DEADLINE */
/* ========================================================= */

function MiniDeadline({
  date,
  title,
  status,
}: {
  date: string;
  title: string;
  status: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 transition hover:border-white/20">
      <div className="flex h-9 w-10 flex-col items-center justify-center rounded-lg border border-white/10">
        <span className="text-[7px] font-medium text-white/50">
          {date.split(" ")[0]}
        </span>

        <span className="text-[6px] text-white/20">
          {date.split(" ")[1]}
        </span>
      </div>

      <div className="flex-1">
        <p className="text-[8px] text-white/40">
          {title}
        </p>

        <p className="mt-1 text-[7px] text-white/20">
          Filing deadline
        </p>
      </div>

      <span className="text-[7px] text-white/30">
        {status}
      </span>
    </div>
  );
}

/* ========================================================= */
/* ACTIVITY */
/* ========================================================= */

function ActivityItem({
  time,
  title,
  description,
  type,
}: {
  time: string;
  title: string;
  description: string;
  type: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-white/20 hover:bg-white/[0.04]">
      <div className="flex items-center justify-between">
        <span className="text-[7px] font-mono text-white/15">
          {time}
        </span>

        <span
          className={`h-1.5 w-1.5 rounded-full ${
            type === "success"
              ? "bg-emerald-400"
              : type === "document"
                ? "bg-blue-400"
                : type === "upload"
                  ? "bg-purple-400"
                  : "bg-white/30"
          }`}
        />
      </div>

      <p className="mt-4 text-[9px] text-white/50">
        {title}
      </p>

      <p className="mt-2 text-[7px] leading-5 text-white/20">
        {description}
      </p>
    </div>
  );
}

/* ========================================================= */
/* VALUE */
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

/* ========================================================= */
/* SIMPLE MODAL */
/* ========================================================= */

function SimpleModal({
  title,
  subtitle,
  onClose,
  children,
}: {
  title: string;
  subtitle: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
              Client 360°
            </p>

            <h3 className="mt-2 text-lg font-medium text-white/80">
              {title}
            </h3>

            <p className="mt-1 text-[8px] text-white/25">
              {subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/40 transition hover:bg-white/5 hover:text-white"
          >
            ×
          </button>
        </div>

        <div className="mt-6">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ========================================================= */
/* MODAL ROW */
/* ========================================================= */

function ModalRow({
  title,
  status,
}: {
  title: string;
  status: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <span className="text-[8px] text-white/50">
        {title}
      </span>

      <span className="text-[7px] text-emerald-400">
        {status}
      </span>
    </div>
  );
}

/* ========================================================= */
/* REASON */
/* ========================================================= */

function Reason({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <p className="text-[8px] text-white/50">
        {title}
      </p>

      <p className="mt-2 text-[8px] leading-5 text-white/25">
        {text}
      </p>
    </div>
  );
}

/* ========================================================= */
/* MODAL STAT */
/* ========================================================= */

function ModalStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
      <p className="text-[7px] text-white/20">
        {label}
      </p>

      <p className="mt-2 text-sm text-white/60">
        {value}
      </p>
    </div>
  );
}