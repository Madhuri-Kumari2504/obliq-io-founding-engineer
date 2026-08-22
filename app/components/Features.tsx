const features = [
  {
    number: "01",
    eyebrow: "PRODUCTIVITY",
    title: "Build faster",
    description:
      "Turn repetitive compliance work into structured workflows so your team can spend more time solving client problems and less time chasing tasks.",
    bullets: [
      "Centralized client workflows",
      "Automated recurring tasks",
      "One workspace for every engagement",
    ],
    visual: "workflow",
  },
  {
    number: "02",
    eyebrow: "INTELLIGENCE",
    title: "Understand everything",
    description:
      "Transform documents and compliance information into structured, actionable data with intelligent extraction and contextual visibility.",
    bullets: [
      "Document intelligence",
      "Structured compliance data",
      "Missing-document visibility",
    ],
    visual: "intelligence",
  },
  {
    number: "03",
    eyebrow: "AUTOMATION",
    title: "Automate operations",
    description:
      "Create proactive workflows around deadlines, documents, communication, and recurring compliance operations.",
    bullets: [
      "Pre-deadline alerts",
      "Automated client communication",
      "WhatsApp-enabled workflows",
    ],
    visual: "automation",
  },
  {
    number: "04",
    eyebrow: "CONTROL",
    title: "Scale with confidence",
    description:
      "Give teams a clear operational layer for managing multiple clients, tracking activity, and maintaining a reliable audit history.",
    bullets: [
      "Multi-client visibility",
      "Operational audit trails",
      "Centralized activity history",
    ],
    visual: "scale",
  },
];

function WorkflowVisual() {
  return (
    <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-6">

      <div className="absolute inset-0 opacity-30">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "35px 35px",
          }}
        />
      </div>

      <div className="relative">

        <div className="flex items-center justify-between">
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
            Workflow engine
          </span>

          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-2 py-1 text-[8px] text-emerald-400">
            ACTIVE
          </span>
        </div>

        <div className="mt-10 space-y-3">

          {[
            ["Client onboarding", "Complete"],
            ["Document collection", "In progress"],
            ["Compliance review", "Queued"],
            ["Deadline monitoring", "Active"],
          ].map(([label, status], index) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.025] p-4"
            >

              <div className="flex items-center gap-3">

                <span className="font-mono text-[9px] text-white/20">
                  0{index + 1}
                </span>

                <span className="text-xs text-white/60">
                  {label}
                </span>

              </div>

              <span
                className={`text-[9px] ${
                  status === "Complete"
                    ? "text-emerald-400"
                    : "text-white/30"
                }`}
              >
                {status}
              </span>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

function IntelligenceVisual() {
  return (
    <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-6">

      <div className="flex items-center justify-between">

        <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
          Document intelligence
        </span>

        <span className="text-[9px] text-white/20">
          AI
        </span>

      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.025] p-5">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-xs text-white/70">
              GST Return Document
            </p>

            <p className="mt-1 text-[9px] text-white/25">
              uploaded just now
            </p>
          </div>

          <div className="rounded-lg border border-white/10 px-3 py-2">
            <span className="text-[9px] text-emerald-400">
              PROCESSED
            </span>
          </div>

        </div>

        <div className="mt-6 space-y-3">

          {[
            ["Document type", "GST Return"],
            ["Client", "Acme Industries"],
            ["Period", "July 2026"],
            ["Confidence", "98.4%"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between border-b border-white/5 pb-3"
            >
              <span className="text-[9px] text-white/25">
                {label}
              </span>

              <span className="text-[9px] text-white/60">
                {value}
              </span>
            </div>
          ))}

        </div>

      </div>

      <div className="mt-4 flex items-center gap-2 text-[9px] text-white/25">

        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

        Structured data extracted successfully
      </div>

    </div>
  );
}

function AutomationVisual() {
  return (
    <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-6">

      <div className="flex items-center justify-between">

        <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
          Automation
        </span>

        <span className="text-[9px] text-emerald-400">
          12 ACTIVE
        </span>

      </div>

      <div className="relative mt-12">

        <div className="mx-auto flex w-fit items-center rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4">

          <div>

            <p className="text-[9px] uppercase tracking-wider text-white/25">
              Trigger
            </p>

            <p className="mt-1 text-xs text-white/70">
              Deadline approaching
            </p>

          </div>

        </div>

        <div className="mx-auto h-10 w-px bg-white/15" />

        <div className="mx-auto flex w-fit items-center rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4">

          <div>

            <p className="text-[9px] uppercase tracking-wider text-white/25">
              Action
            </p>

            <p className="mt-1 text-xs text-white/70">
              Notify client
            </p>

          </div>

        </div>

        <div className="mx-auto h-10 w-px bg-white/15" />

        <div className="mx-auto flex w-fit items-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] px-5 py-4">

          <div>

            <p className="text-[9px] uppercase tracking-wider text-emerald-400/60">
              Result
            </p>

            <p className="mt-1 text-xs text-white/70">
              Client notified
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

function ScaleVisual() {
  return (
    <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-6">

      <div className="flex items-center justify-between">

        <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
          Operations
        </span>

        <span className="text-[9px] text-white/20">
          LIVE
        </span>

      </div>

      <div className="mt-10 grid grid-cols-2 gap-3">

        {[
          ["Clients", "248"],
          ["Active tasks", "1,482"],
          ["Due this week", "37"],
          ["Completed", "96.8%"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-xl border border-white/10 bg-white/[0.025] p-5"
          >

            <p className="text-[9px] uppercase tracking-wider text-white/25">
              {label}
            </p>

            <p className="mt-3 text-2xl font-semibold tracking-tight">
              {value}
            </p>

          </div>
        ))}

      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.025] p-4">

        <div className="flex items-center justify-between">

          <span className="text-[9px] text-white/25">
            Operational health
          </span>

          <span className="text-[9px] text-emerald-400">
            Healthy
          </span>

        </div>

        <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">

          <div className="h-full w-[92%] rounded-full bg-white/60" />

        </div>

      </div>

    </div>
  );
}

function FeatureVisual({
  type,
}: {
  type: string;
}) {
  switch (type) {
    case "workflow":
      return <WorkflowVisual />;

    case "intelligence":
      return <IntelligenceVisual />;

    case "automation":
      return <AutomationVisual />;

    case "scale":
      return <ScaleVisual />;

    default:
      return null;
  }
}

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 py-32 text-white lg:px-8"
    >

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          <div>

            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              Built for modern operations
            </p>

            <div className="mt-5 h-px w-16 bg-white/30" />

          </div>

          <div>

            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">

              Less operational noise.
              <span className="text-white/30">
                {" "}
                More control.
              </span>

            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
              Obliq-io turns fragmented compliance operations into a
              connected system where teams can build faster, understand
              their work, automate repetitive actions, and scale with
              confidence.
            </p>

          </div>

        </div>

        {/* Feature blocks */}
        <div className="mt-24 space-y-6">

          {features.map((feature, index) => (
            <article
              key={feature.number}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.015] transition-all duration-500 hover:border-white/20 hover:bg-white/[0.025]"
            >

              <div
                className={`grid lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >

                {/* Text */}
                <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">

                  <div className="flex items-center gap-4">

                    <span className="font-mono text-xs text-white/20">
                      {feature.number}
                    </span>

                    <div className="h-px w-8 bg-white/10" />

                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                      {feature.eyebrow}
                    </span>

                  </div>

                  <h3 className="mt-8 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                    {feature.title}
                  </h3>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-white/40 sm:text-base">
                    {feature.description}
                  </p>

                  <div className="mt-8 space-y-4">

                    {feature.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="flex items-center gap-3"
                      >

                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/15 text-[9px] text-white/50">
                          ✓
                        </span>

                        <span className="text-sm text-white/55">
                          {bullet}
                        </span>

                      </div>
                    ))}

                  </div>

                </div>

                {/* Visual */}
                <div className="border-t border-white/10 p-5 sm:p-8 lg:border-l lg:border-t-0">

                  <FeatureVisual type={feature.visual} />

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* Bottom statement */}
        <div className="mt-24 border-t border-white/10 pt-10">

          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

            <div>

              <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                The Obliq approach
              </p>

              <p className="mt-4 max-w-2xl text-2xl font-medium tracking-tight text-white/70 sm:text-3xl">
                Replace fragmented tools and manual follow-ups with one
                intelligent operational layer.
              </p>

            </div>

            <div className="text-sm text-white/30">
              Designed around the way modern teams work.
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}