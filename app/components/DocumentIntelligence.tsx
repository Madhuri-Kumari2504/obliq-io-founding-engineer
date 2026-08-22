"use client";

import { useState } from "react";

type Document = {
  id: number;
  name: string;
  type: string;
  status: "Verified" | "Review" | "Processing";
  date: string;
  confidence: string;
};

const documents: Document[] = [
  {
    id: 1,
    name: "GST_Return_July_2026.pdf",
    type: "GST Return",
    status: "Verified",
    date: "17 Aug 2026",
    confidence: "99.2%",
  },
  {
    id: 2,
    name: "TDS_Statement_Q2.pdf",
    type: "TDS Statement",
    status: "Review",
    date: "16 Aug 2026",
    confidence: "94.8%",
  },
  {
    id: 3,
    name: "Company_Master_Data.pdf",
    type: "ROC Document",
    status: "Verified",
    date: "15 Aug 2026",
    confidence: "98.7%",
  },
];

const extractionData = [
  ["GSTIN", "09ABCDE1234F1Z5"],
  ["Tax Period", "July 2026"],
  ["Taxable Value", "₹24,82,000"],
  ["CGST", "₹2,23,380"],
  ["SGST", "₹2,23,380"],
  ["Total Tax", "₹4,46,760"],
];

export default function DocumentIntelligence() {
  const [activeDocument, setActiveDocument] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  const document = documents[activeDocument];

  function simulateProcessing() {
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
    }, 1800);
  }

  return (
    <section
      id="documents"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 py-32 text-white lg:px-8"
    >
      {/* Background atmosphere */}

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[160px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* ================================================= */}
        {/* SECTION HEADER */}
        {/* ================================================= */}

        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">

          <div>
            <div className="flex items-center gap-3">

              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                <span className="text-xs text-white/60">
                  06
                </span>
              </div>

              <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                05
              </span>

            </div>

            <div className="mt-6 h-px w-16 bg-white/30" />

            <p className="mt-8 max-w-xs text-sm leading-7 text-white/30">
              Turn unstructured compliance documents into structured,
              actionable information without manually reading every page.
            </p>
          </div>

          <div>

            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Documents in.
              <br />

              <span className="text-white/30">
                Intelligence out.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
              Obliq extracts important information, identifies compliance
              signals, and turns documents into workflows your team can act on.
            </p>

          </div>

        </div>

        {/* ================================================= */}
        {/* DOCUMENT WORKSPACE */}
        {/* ================================================= */}

        <div className="mt-20 overflow-hidden rounded-[28px] border border-white/10 bg-[#080808] shadow-2xl">

          {/* ================================================= */}
          {/* WORKSPACE HEADER */}
          {/* ================================================= */}

          <div className="flex flex-col gap-5 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-4">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">

                <span className="text-xs text-white/50">
                  DOC
                </span>

              </div>

              <div>

                <p className="text-xs font-medium text-white/70">
                  Document workspace
                </p>

                <p className="mt-1 text-[9px] text-white/20">
                  AI extraction & compliance analysis
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <div className="flex items-center gap-2">

                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                <span className="text-[9px] text-white/30">
                  AI engine online
                </span>

              </div>

              <button
                onClick={() => setShowUpload(!showUpload)}
                className="rounded-lg bg-white px-4 py-2.5 text-[9px] font-medium text-black transition hover:bg-white/90"
              >
                + Upload document
              </button>

            </div>

          </div>

          {/* ================================================= */}
          {/* UPLOAD AREA */}
          {/* ================================================= */}

          {showUpload && (
            <div className="border-b border-white/10 p-6 sm:p-10">

              <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.015] p-10 text-center transition hover:border-white/30">

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                  <span className="text-lg text-white/40">
                    ↑
                  </span>
                </div>

                <h3 className="mt-5 text-sm font-medium text-white/60">
                  Drop a compliance document here
                </h3>

                <p className="mx-auto mt-2 max-w-md text-[10px] leading-5 text-white/20">
                  PDF, XLSX, DOCX and supported business documents can be
                  analyzed by the document intelligence layer.
                </p>

                <button
                  onClick={simulateProcessing}
                  className="mt-6 rounded-lg border border-white/15 px-5 py-2.5 text-[9px] text-white/50 transition hover:border-white/30 hover:text-white"
                >
                  Simulate AI processing
                </button>

              </div>

            </div>
          )}

          {/* ================================================= */}
          {/* DOCUMENT LIST */}
          {/* ================================================= */}

          <div className="grid lg:grid-cols-[300px_1fr]">

            {/* LEFT SIDEBAR */}

            <div className="border-b border-white/10 lg:border-b-0 lg:border-r">

              <div className="border-b border-white/10 px-6 py-5">

                <div className="flex items-center justify-between">

                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                    Recent documents
                  </p>

                  <span className="text-[9px] text-white/20">
                    {documents.length}
                  </span>

                </div>

              </div>

              <div className="p-3">

                {documents.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveDocument(index)}
                    className={`w-full rounded-xl p-4 text-left transition-all duration-300 ${
                      activeDocument === index
                        ? "border border-white/15 bg-white/[0.05]"
                        : "border border-transparent hover:bg-white/[0.025]"
                    }`}
                  >

                    <div className="flex items-start gap-3">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02]">

                        <span className="text-[8px] text-white/30">
                          PDF
                        </span>

                      </div>

                      <div className="min-w-0">

                        <p className="truncate text-[10px] font-medium text-white/55">
                          {item.name}
                        </p>

                        <p className="mt-1 text-[8px] text-white/20">
                          {item.type}
                        </p>

                        <div className="mt-3 flex items-center justify-between">

                          <span className="text-[8px] text-white/20">
                            {item.date}
                          </span>

                          <Status status={item.status} />

                        </div>

                      </div>

                    </div>

                  </button>
                ))}

              </div>

              {/* Sidebar stats */}

              <div className="m-4 rounded-xl border border-white/10 bg-white/[0.02] p-5">

                <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                  Workspace
                </p>

                <div className="mt-5 space-y-4">

                  <MiniStat label="Documents processed" value="1,248" />

                  <MiniStat label="Fields extracted" value="18.4k" />

                  <MiniStat label="Avg. confidence" value="97.8%" />

                </div>

              </div>

            </div>

            {/* ================================================= */}
            {/* MAIN DOCUMENT VIEWER */}
            {/* ================================================= */}

            <div className="min-w-0">

              {/* Document top bar */}

              <div className="flex flex-col gap-4 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                    Selected document
                  </p>

                  <p className="mt-2 truncate text-xs text-white/60">
                    {document.name}
                  </p>

                </div>

                <div className="flex items-center gap-2">

                  <button className="rounded-lg border border-white/10 px-3 py-2 text-[8px] text-white/30 transition hover:border-white/20 hover:text-white/60">
                    Preview
                  </button>

                  <button className="rounded-lg border border-white/10 px-3 py-2 text-[8px] text-white/30 transition hover:border-white/20 hover:text-white/60">
                    Export data
                  </button>

                </div>

              </div>

              {/* ================================================= */}
              {/* ANALYSIS GRID */}
              {/* ================================================= */}

              <div className="grid xl:grid-cols-[0.9fr_1.1fr]">

                {/* DOCUMENT PREVIEW */}

                <div className="border-b border-white/10 p-6 xl:border-b-0 xl:border-r sm:p-8">

                  <div className="relative min-h-[500px] overflow-hidden rounded-2xl border border-white/10 bg-[#111]">

                    {/* Fake PDF */}

                    <div className="absolute left-5 right-5 top-5 flex items-center justify-between">

                      <span className="text-[8px] text-white/20">
                        PAGE 01 / 08
                      </span>

                      <span className="text-[8px] text-white/20">
                        100%
                      </span>

                    </div>

                    <div className="mx-auto mt-16 w-[80%] max-w-[430px] rounded-sm bg-white/[0.95] p-8 text-black shadow-2xl sm:p-10">

                      <div className="flex items-start justify-between">

                        <div>

                          <div className="h-3 w-24 bg-black/80" />

                          <div className="mt-2 h-1.5 w-16 bg-black/20" />

                        </div>

                        <div className="h-8 w-8 border border-black/10" />

                      </div>

                      <div className="mt-10">

                        <div className="h-2 w-32 bg-black/60" />

                        <div className="mt-4 space-y-2">

                          <FakeLine width="100%" />

                          <FakeLine width="85%" />

                          <FakeLine width="92%" />

                          <FakeLine width="70%" />

                        </div>

                      </div>

                      <div className="mt-12 border border-black/10 p-4">

                        <div className="grid grid-cols-2 gap-4">

                          <div>

                            <div className="h-1.5 w-12 bg-black/20" />

                            <div className="mt-2 h-2 w-24 bg-black/50" />

                          </div>

                          <div>

                            <div className="h-1.5 w-12 bg-black/20" />

                            <div className="mt-2 h-2 w-20 bg-black/50" />

                          </div>

                        </div>

                      </div>

                      <div className="mt-10 space-y-2">

                        <FakeLine width="95%" />

                        <FakeLine width="75%" />

                        <FakeLine width="88%" />

                        <FakeLine width="62%" />

                      </div>

                    </div>

                    {/* AI scanning indicator */}

                    <div className="absolute left-[10%] right-[10%] top-[46%] h-px bg-emerald-400/70 shadow-[0_0_20px_rgba(52,211,153,0.5)]" />

                    <div className="absolute left-[10%] top-[46%] rounded-full bg-emerald-400 px-2 py-1 text-[7px] font-medium text-black">
                      AI SCAN
                    </div>

                  </div>

                </div>

                {/* ================================================= */}
                {/* EXTRACTION PANEL */}
                {/* ================================================= */}

                <div className="p-6 sm:p-8">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                        AI extraction
                      </p>

                      <h3 className="mt-3 text-xl font-semibold tracking-tight">
                        Structured information
                      </h3>

                    </div>

                    <div className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.04] px-3 py-1.5">

                      <span className="text-[8px] text-emerald-400">
                        {document.confidence} CONFIDENCE
                      </span>

                    </div>

                  </div>

                  {/* Extracted fields */}

                  <div className="mt-8 space-y-2">

                    {extractionData.map(([label, value]) => (
                      <div
                        key={label}
                        className="group flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-white/20 sm:flex-row sm:items-center sm:justify-between"
                      >

                        <span className="text-[9px] uppercase tracking-wider text-white/20">
                          {label}
                        </span>

                        <span className="font-mono text-[10px] text-white/60">
                          {value}
                        </span>

                      </div>
                    ))}

                  </div>

                  {/* ================================================= */}
                  {/* COMPLIANCE IMPACT */}
                  {/* ================================================= */}

                  <div className="mt-8">

                    <div className="flex items-center justify-between">

                      <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                        Compliance impact
                      </p>

                      <span className="text-[8px] text-white/20">
                        AI evaluated
                      </span>

                    </div>

                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5">

                      <div className="flex items-center gap-4">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/[0.04]">

                          <span className="text-xs text-emerald-400">
                            ✓
                          </span>

                        </div>

                        <div>

                          <p className="text-xs text-white/60">
                            Document appears complete
                          </p>

                          <p className="mt-1 text-[9px] text-white/20">
                            No critical extraction anomalies detected.
                          </p>

                        </div>

                      </div>

                      <div className="mt-5 h-px bg-white/10" />

                      <div className="mt-5 flex items-center justify-between">

                        <span className="text-[9px] text-white/25">
                          Workflow status
                        </span>

                        <span className="rounded-full border border-emerald-400/20 px-3 py-1 text-[8px] text-emerald-400">
                          READY
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* ================================================= */}
                  {/* ACTIONS */}
                  {/* ================================================= */}

                  <div className="mt-8">

                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                      Suggested actions
                    </p>

                    <div className="mt-4 space-y-2">

                      <ActionRow text="Add extracted data to client record" />

                      <ActionRow text="Update compliance workflow" />

                      <ActionRow text="Create review task" />

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* ================================================= */}
          {/* PROCESSING OVERLAY */}
          {/* ================================================= */}

          {processing && (
            <div className="border-t border-white/10 bg-white/[0.02] p-8">

              <div className="mx-auto max-w-xl">

                <div className="flex items-center gap-4">

                  <div className="relative flex h-10 w-10 items-center justify-center">

                    <span className="absolute inset-0 animate-ping rounded-full border border-white/10" />

                    <span className="h-2 w-2 rounded-full bg-white" />

                  </div>

                  <div>

                    <p className="text-sm text-white/60">
                      AI processing document
                    </p>

                    <p className="mt-1 text-[9px] text-white/20">
                      Extracting fields and evaluating compliance signals...
                    </p>

                  </div>

                </div>

                <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/10">

                  <div className="h-full w-2/3 animate-pulse rounded-full bg-white/50" />

                </div>

              </div>

            </div>
          )}

        </div>

        {/* ================================================= */}
        {/* INTELLIGENCE PIPELINE */}
        {/* ================================================= */}

        <div className="mt-20 grid gap-4 md:grid-cols-4">

          <PipelineCard
            number="01"
            title="Ingest"
            text="Bring documents into a centralized workspace."
          />

          <PipelineCard
            number="02"
            title="Understand"
            text="Extract structured information from unstructured files."
          />

          <PipelineCard
            number="03"
            title="Validate"
            text="Surface anomalies, missing information, and important signals."
          />

          <PipelineCard
            number="04"
            title="Act"
            text="Turn extracted information into workflows and tasks."
          />

        </div>

        {/* ================================================= */}
        {/* BOTTOM STATEMENT */}
        {/* ================================================= */}

        <div className="mt-24 border-t border-white/10 pt-10">

          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

            <div>

              <p className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                From document to decision
              </p>

              <h3 className="mt-4 max-w-3xl text-2xl font-medium leading-tight tracking-tight text-white/70 sm:text-3xl">
                Don&apos;t just store documents.
                <span className="text-white/30">
                  {" "}
                  Turn them into operational intelligence.
                </span>
              </h3>

            </div>

            <div className="flex items-center gap-2 text-[9px] text-white/25">

              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              Intelligence layer active

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


/* ========================================================= */
/* STATUS */
/* ========================================================= */

function Status({
  status,
}: {
  status: Document["status"];
}) {
  const isVerified = status === "Verified";
  const isReview = status === "Review";

  return (
    <span
      className={`rounded-full border px-2 py-1 text-[7px] ${
        isVerified
          ? "border-emerald-400/20 text-emerald-400"
          : isReview
            ? "border-yellow-400/20 text-yellow-400"
            : "border-white/10 text-white/30"
      }`}
    >
      {status}
    </span>
  );
}


/* ========================================================= */
/* MINI STAT */
/* ========================================================= */

function MiniStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">

      <span className="text-[8px] text-white/20">
        {label}
      </span>

      <span className="text-[10px] font-medium text-white/50">
        {value}
      </span>

    </div>
  );
}


/* ========================================================= */
/* ACTION ROW */
/* ========================================================= */

function ActionRow({
  text,
}: {
  text: string;
}) {
  return (
    <button className="group flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 text-left transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">

      <span className="text-[9px] text-white/40">
        {text}
      </span>

      <span className="text-white/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white/60">
        →
      </span>

    </button>
  );
}


/* ========================================================= */
/* PIPELINE CARD */
/* ========================================================= */

function PipelineCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]">

      <span className="font-mono text-[9px] text-white/20">
        {number}
      </span>

      <h4 className="mt-8 text-sm font-medium text-white/60">
        {title}
      </h4>

      <p className="mt-3 text-[10px] leading-6 text-white/25">
        {text}
      </p>

    </div>
  );
}


/* ========================================================= */
/* FAKE DOCUMENT LINE */
/* ========================================================= */

function FakeLine({
  width,
}: {
  width: string;
}) {
  return (
    <div
      className="h-1.5 bg-black/10"
      style={{
        width,
      }}
    />
  );
}