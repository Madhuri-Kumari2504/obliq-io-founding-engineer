"use client";

import { useState } from "react";

type QueryKey = "deadlines" | "documents" | "gst" | "risk";

type QueryResult = {
  title: string;
  summary: string;
  details: string[];
  status: string;
};

const queries: Record<QueryKey, QueryResult> = {
  deadlines: {
    title: "Upcoming compliance deadlines",
    summary:
      "The next important compliance deadlines require attention before submission.",
    details: [
      "GSTR-1 filing is upcoming.",
      "GSTR-3B should be reviewed before submission.",
      "TDS payment is due shortly.",
      "No critical overdue deadline is currently detected.",
    ],
    status: "Monitoring",
  },

  documents: {
    title: "Missing documents",
    summary:
      "The document workspace contains items that require attention.",
    details: [
      "2 documents are currently missing.",
      "1 document requires human verification.",
      "Recently uploaded documents have been processed by AI.",
      "Missing documents should be collected before the next filing cycle.",
    ],
    status: "Action required",
  },

  gst: {
    title: "GST compliance overview",
    summary:
      "GST compliance is currently healthy, with one reconciliation item requiring review.",
    details: [
      "GSTR-1 is validated.",
      "GSTR-3B is validated.",
      "GSTR-2B has been reconciled.",
      "ITC reconciliation requires review.",
    ],
    status: "Healthy",
  },

  risk: {
    title: "Highest compliance risks",
    summary:
      "Three compliance areas currently require attention.",
    details: [
      "ITC reconciliation is the highest priority.",
      "Missing client documents are the second priority.",
      "TDS reconciliation should also be reviewed.",
      "No critical compliance failure is currently detected.",
    ],
    status: "Medium attention",
  },
};

export default function AICompliance() {
  const [input, setInput] = useState("");

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const [activeQuery, setActiveQuery] =
    useState<QueryKey>("deadlines");

  const result = queries[activeQuery];

  /* ========================================================= */
  /* RUN PREDEFINED QUERY                                      */
  /* ========================================================= */

  function runQuery(queryKey: QueryKey) {
    setIsProcessing(true);
    setError("");
    setResponse("");
    setActiveQuery(queryKey);

    setTimeout(() => {
      setIsProcessing(false);
    }, 700);
  }

  /* ========================================================= */
  /* AI QUERY HANDLER                                          */
  /* ========================================================= */

  function handleSubmit() {
    const userQuery = input.trim();

    if (!userQuery) {
      setError("Please enter a question first.");
      return;
    }

    setError("");
    setIsAnalyzing(true);
    setResponse("");

    setTimeout(() => {
      const normalizedQuery = userQuery.toLowerCase();

      /* ===================================================== */
      /* RISK                                                  */
      /* ===================================================== */

      if (
        normalizedQuery.includes("risk") ||
        normalizedQuery.includes("risky") ||
        normalizedQuery.includes("priority")
      ) {
        setActiveQuery("risk");

        setResponse(
          "3 compliance areas require attention. ITC reconciliation is the highest priority, followed by missing client documents and TDS reconciliation."
        );
      }

      /* ===================================================== */
      /* DEADLINES                                             */
      /* ===================================================== */

      else if (
        normalizedQuery.includes("deadline") ||
        normalizedQuery.includes("deadlines") ||
        normalizedQuery.includes("due") ||
        normalizedQuery.includes("filing")
      ) {
        setActiveQuery("deadlines");

        setResponse(
          "The next important deadlines are GSTR-1, GSTR-3B and TDS payment. GSTR-3B should be reviewed before submission."
        );
      }

      /* ===================================================== */
      /* GST                                                   */
      /* ===================================================== */

      else if (
        normalizedQuery.includes("gst") ||
        normalizedQuery.includes("gstr") ||
        normalizedQuery.includes("itc")
      ) {
        setActiveQuery("gst");

        setResponse(
          "GST compliance is currently healthy. GSTR-1 and GSTR-3B are validated, while ITC reconciliation requires review."
        );
      }

      /* ===================================================== */
      /* DOCUMENTS                                             */
      /* ===================================================== */

      else if (
        normalizedQuery.includes("document") ||
        normalizedQuery.includes("documents") ||
        normalizedQuery.includes("missing")
      ) {
        setActiveQuery("documents");

        setResponse(
          "2 documents are currently missing and 1 document requires human verification."
        );
      }

      /* ===================================================== */
      /* DEFAULT                                               */
      /* ===================================================== */

      else {
        setResponse(
          "Based on the current compliance workspace, there are no critical exceptions. I recommend reviewing open tasks, upcoming deadlines and missing documents."
        );
      }

      setIsAnalyzing(false);
    }, 1200);
  }

  /* ========================================================= */
  /* ENTER KEY                                                */
  /* ========================================================= */

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  }

  /* ========================================================= */
  /* CLEAR QUERY                                              */
  /* ========================================================= */

  function clearQuery() {
    setInput("");
    setResponse("");
    setError("");
  }

  /* ========================================================= */
  /* AI REASONING                                             */
  /* ========================================================= */

  function showAiReasoning() {
    setResponse(
      "AI reasoning indicates that the current workspace is generally healthy. The main recommended actions are reviewing ITC reconciliation, collecting missing documents and monitoring upcoming deadlines."
    );
  }

  /* ========================================================= */
  /* RENDER                                                    */
  /* ========================================================= */

  return (
    <section
      id="ai-compliance"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 py-32 text-white lg:px-8"
    >
      {/* ================================================= */}
      {/* BACKGROUND                                         */}
      {/* ================================================= */}

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

      {/* ================================================= */}
      {/* MAIN CONTAINER                                    */}
      {/* ================================================= */}

      <div className="relative mx-auto max-w-7xl">

        {/* ================================================= */}
        {/* HEADER                                            */}
        {/* ================================================= */}

        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                <span className="text-xs text-white/50">
                  05
                </span>
              </div>

              <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                04
              </span>

            </div>

            <div className="mt-6 h-px w-16 bg-white/30" />

            <p className="mt-8 max-w-xs text-sm leading-7 text-white/30">
              Ask questions about compliance, deadlines, documents
              and risk. Obliq analyzes the connected workspace and
              surfaces what matters.
            </p>

          </div>

          <div>

            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Compliance intelligence.
              <br />

              <span className="text-white/30">
                Ask. Analyze. Act.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
              Instead of searching through documents and spreadsheets,
              ask Obliq what needs attention and receive an immediate
              operational answer.
            </p>

          </div>

        </div>

        {/* ================================================= */}
        {/* AI WORKSPACE                                      */}
        {/* ================================================= */}

        <div className="mt-20 overflow-hidden rounded-[28px] border border-white/10 bg-[#080808] shadow-2xl">

          {/* ================================================= */}
          {/* TOP BAR                                          */}
          {/* ================================================= */}

          <div className="flex flex-col gap-4 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                <span className="text-[9px] text-white/50">
                  AI
                </span>
              </div>

              <div>

                <p className="text-[9px] font-medium text-white/60">
                  Obliq Intelligence
                </p>

                <p className="mt-1 text-[7px] text-white/20">
                  Compliance reasoning workspace
                </p>

              </div>

            </div>

            <div className="flex items-center gap-2">

              <span className="flex items-center gap-2 rounded-full border border-emerald-400/20 px-3 py-1.5 text-[7px] text-emerald-400">

                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                AI ONLINE

              </span>

            </div>

          </div>

          {/* ================================================= */}
          {/* QUERY AREA                                       */}
          {/* ================================================= */}

          <div className="border-b border-white/10 p-6 sm:p-8">

            <div>

              <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                Ask Obliq
              </p>

              <h3 className="mt-2 text-lg font-medium text-white/70">
                What would you like to know?
              </h3>

            </div>

            {/* INPUT */}

            <div className="mt-6 flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.02] p-2 sm:flex-row">

              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about deadlines, documents, GST, or compliance risks..."
                className="min-h-12 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/15"
              />

              {input && (
                <button
                  type="button"
                  onClick={clearQuery}
                  className="rounded-xl px-4 py-3 text-[8px] text-white/25 transition hover:text-white/60"
                >
                  Clear
                </button>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isAnalyzing}
                className="rounded-xl bg-white px-6 py-3 text-xs font-medium text-black transition hover:bg-white/80 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isAnalyzing
                  ? "Analyzing..."
                  : "Analyze →"}
              </button>

            </div>

            {/* ERROR */}

            {error && (
              <div className="mt-3 rounded-xl border border-red-400/20 bg-red-400/[0.03] px-4 py-3 text-[8px] text-red-300">
                {error}
              </div>
            )}

            {/* SUGGESTIONS */}

            <div className="mt-5 flex flex-wrap gap-2">

              <Suggestion
                text="Upcoming deadlines"
                onClick={() => {
                  setInput("What are the upcoming deadlines?");
                  runQuery("deadlines");
                }}
              />

              <Suggestion
                text="Missing documents"
                onClick={() => {
                  setInput("Which documents are missing?");
                  runQuery("documents");
                }}
              />

              <Suggestion
                text="GST overview"
                onClick={() => {
                  setInput("Give me a GST overview");
                  runQuery("gst");
                }}
              />

              <Suggestion
                text="Highest risks"
                onClick={() => {
                  setInput("What are the highest risks?");
                  runQuery("risk");
                }}
              />

            </div>

          </div>

          {/* ================================================= */}
          {/* RESPONSE AREA                                    */}
          {/* ================================================= */}

          <div className="grid lg:grid-cols-[1.3fr_0.7fr]">

            {/* LEFT RESPONSE */}

            <div className="border-b border-white/10 p-6 lg:border-b-0 lg:border-r sm:p-8">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                    Intelligence result
                  </p>

                  <h3 className="mt-2 text-base font-medium text-white/60">
                    {result.title}
                  </h3>

                </div>

                <span className="rounded-full border border-white/10 px-3 py-1.5 text-[7px] text-white/30">
                  {result.status}
                </span>

              </div>

              {/* PROCESSING */}

              {isProcessing && (
                <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.02] p-6">

                  <div className="flex items-center gap-3">

                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                    <span className="text-[9px] text-white/40">
                      Analyzing compliance data...
                    </span>

                  </div>

                  <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/5">

                    <div className="h-full w-2/3 animate-pulse rounded-full bg-white/30" />

                  </div>

                </div>
              )}

              {/* RESULT */}

              {!isProcessing && (

                <div className="mt-7">

                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">

                    <div className="flex items-start gap-3">

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">

                        <span className="text-[8px] text-white/50">
                          AI
                        </span>

                      </div>

                      <div>

                        <p className="text-[9px] leading-5 text-white/60">
                          {response || result.summary}
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* DETAILS */}

                  <div className="mt-5 space-y-2">

                    {result.details.map((detail, index) => (

                      <div
                        key={index}
                        className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.015] px-4 py-3 transition hover:border-white/10 hover:bg-white/[0.03]"
                      >

                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/10 text-[7px] text-white/40">
                          {index + 1}
                        </span>

                        <span className="text-[8px] text-white/35">
                          {detail}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              )}

            </div>

            {/* RIGHT PANEL */}

            <div className="p-6 sm:p-8">

              <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                AI confidence
              </p>

              <div className="mt-5 flex items-end justify-between">

                <span className="text-3xl font-semibold text-white/70">
                  96%
                </span>

                <span className="text-[7px] text-emerald-400">
                  High confidence
                </span>

              </div>

              <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/5">

                <div
                  className="h-full rounded-full bg-emerald-400/60"
                  style={{
                    width: "96%",
                  }}
                />

              </div>

              <div className="mt-8">

                <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                  Analysis sources
                </p>

                <div className="mt-4 space-y-2">

                  <SourceItem text="Compliance records" />

                  <SourceItem text="Document intelligence" />

                  <SourceItem text="Deadline monitoring" />

                  <SourceItem text="Client activity" />

                </div>

              </div>

              <button
                type="button"
                onClick={showAiReasoning}
                className="mt-7 w-full rounded-xl border border-white/10 py-3 text-[8px] text-white/35 transition hover:border-white/20 hover:bg-white/[0.03] hover:text-white/60"
              >
                View AI reasoning →
              </button>

            </div>

          </div>

          {/* ================================================= */}
          {/* QUICK ANALYSIS                                   */}
          {/* ================================================= */}

          <div className="border-t border-white/10 p-6 sm:p-8">

            <div>

              <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                Quick analysis
              </p>

              <p className="mt-2 text-[9px] text-white/25">
                Select an area to instantly inspect the compliance
                workspace.
              </p>

            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

              <AnalysisCard
                title="Deadlines"
                description="Upcoming filings"
                active={activeQuery === "deadlines"}
                onClick={() => runQuery("deadlines")}
              />

              <AnalysisCard
                title="Documents"
                description="Missing documents"
                active={activeQuery === "documents"}
                onClick={() => runQuery("documents")}
              />

              <AnalysisCard
                title="GST"
                description="GST health"
                active={activeQuery === "gst"}
                onClick={() => runQuery("gst")}
              />

              <AnalysisCard
                title="Risk"
                description="Priority risks"
                active={activeQuery === "risk"}
                onClick={() => runQuery("risk")}
              />

            </div>

          </div>

        </div>

        {/* ================================================= */}
        {/* VALUE STATEMENT                                   */}
        {/* ================================================= */}

        <div className="mt-24 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">

          <Value
            number="01"
            title="Ask naturally"
            text="Ask questions in plain language instead of searching through multiple compliance records."
          />

          <Value
            number="02"
            title="Understand instantly"
            text="Obliq analyzes connected compliance information and summarizes what matters."
          />

          <Value
            number="03"
            title="Act faster"
            text="Turn intelligence into action by identifying risks, missing documents and upcoming deadlines."
          />

        </div>

      </div>
    </section>
  );
}

/* ========================================================= */
/* SUGGESTION                                                */
/* ========================================================= */

function Suggestion({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-[9px] text-white/30 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white/60"
    >
      {text}
    </button>
  );
}

/* ========================================================= */
/* SOURCE ITEM                                               */
/* ========================================================= */

function SourceItem({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.015] px-3 py-3">

      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

      <span className="text-[8px] text-white/30">
        {text}
      </span>

    </div>
  );
}

/* ========================================================= */
/* ANALYSIS CARD                                             */
/* ========================================================= */

function AnalysisCard({
  title,
  description,
  active,
  onClick,
}: {
  title: string;
  description: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group rounded-xl border p-4 text-left transition-all duration-300 ${
        active
          ? "border-white/20 bg-white/[0.06]"
          : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
      }`}
    >

      <div className="flex items-center justify-between">

        <span
          className={`text-[9px] font-medium ${
            active
              ? "text-white/70"
              : "text-white/40"
          }`}
        >
          {title}
        </span>

        <span
          className={`text-[10px] transition-transform duration-300 ${
            active
              ? "translate-x-0 text-white/50"
              : "text-white/20 group-hover:translate-x-1"
          }`}
        >
          →
        </span>

      </div>

      <p className="mt-2 text-[7px] text-white/20">
        {description}
      </p>

    </button>
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