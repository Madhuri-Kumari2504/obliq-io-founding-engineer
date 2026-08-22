const capabilities = [
  {
    number: "01",
    title: "Intelligent Infrastructure",
    description:
      "Build reliable systems on infrastructure designed around modern workloads, automation, and intelligent applications.",
    tag: "INFRASTRUCTURE",
  },
  {
    number: "02",
    title: "Developer Workflows",
    description:
      "Move from idea to deployment with workflows that reduce operational friction and keep engineering teams focused.",
    tag: "DEVELOPER EXPERIENCE",
  },
  {
    number: "03",
    title: "Observability",
    description:
      "Understand what is happening across your systems with clear telemetry, performance signals, and operational visibility.",
    tag: "OBSERVABILITY",
  },
];

export default function Platform() {
  return (
    <section
      id="platform"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 py-32 text-white lg:px-8"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              The platform
            </p>

            <div className="mt-5 h-px w-16 bg-white/30" />
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Everything you need to build
              <span className="text-white/30"> what comes next.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
              Obliq-io brings infrastructure, developer workflows, and
              operational intelligence together into one focused platform.
            </p>
          </div>

        </div>

        {/* Capability cards */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-3">

          {capabilities.map((capability) => (
            <article
              key={capability.number}
              className="group relative min-h-[360px] bg-[#080808] p-8 transition-all duration-500 hover:bg-[#0d0d0d] sm:p-10"
            >

              {/* Number */}
              <div className="flex items-center justify-between">

                <span className="font-mono text-xs text-white/25">
                  {capability.number}
                </span>

                <span className="text-[9px] tracking-[0.2em] text-white/20">
                  {capability.tag}
                </span>

              </div>

              {/* Icon */}
              <div className="mt-16 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">

                <div className="h-3 w-3 rounded-full border border-white/50 transition-all duration-500 group-hover:scale-150 group-hover:bg-white/20" />

              </div>

              {/* Content */}
              <div className="mt-8">

                <h3 className="text-2xl font-medium tracking-tight">
                  {capability.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-white/40">
                  {capability.description}
                </p>

              </div>

              {/* Arrow */}
              <div className="absolute bottom-8 right-8 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-sm text-white/30 transition-all duration-300 group-hover:border-white/30 group-hover:text-white">
                →
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-white/50 transition-all duration-500 group-hover:w-full" />

            </article>
          ))}

        </div>

        {/* Platform visualization */}
        <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-[#080808]">

          <div className="grid lg:grid-cols-2">

            {/* Left */}
            <div className="p-8 sm:p-12">

              <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                One operational layer
              </p>

              <h3 className="mt-6 max-w-xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                From infrastructure to intelligence.
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/40">
                Keep your critical systems visible, understandable, and
                manageable as your applications grow.
              </p>

              <div className="mt-10 space-y-5">

                {[
                  "Unified system visibility",
                  "Developer-focused workflows",
                  "Operational intelligence",
                  "Designed for scale",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <span className="font-mono text-[10px] text-white/20">
                      0{index + 1}
                    </span>

                    <div className="h-px w-6 bg-white/15" />

                    <span className="text-sm text-white/60">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            {/* Right visualization */}
            <div className="relative min-h-[420px] border-t border-white/10 lg:border-l lg:border-t-0">

              {/* Grid */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Center */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/15 bg-white/[0.03]">

                  <div className="absolute inset-3 rounded-full border border-white/10" />

                  <div className="absolute inset-8 rounded-full border border-white/15" />

                  <div className="h-3 w-3 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.5)]" />

                </div>

              </div>

              {/* Nodes */}
              <div className="absolute left-[15%] top-[22%] flex items-center gap-3">

                <span className="h-2 w-2 rounded-full bg-white/50" />

                <span className="text-[10px] text-white/30">
                  COMPUTE
                </span>

              </div>

              <div className="absolute right-[15%] top-[30%] flex items-center gap-3">

                <span className="text-[10px] text-white/30">
                  DATA
                </span>

                <span className="h-2 w-2 rounded-full bg-white/50" />

              </div>

              <div className="absolute bottom-[22%] left-[18%] flex items-center gap-3">

                <span className="h-2 w-2 rounded-full bg-white/50" />

                <span className="text-[10px] text-white/30">
                  SERVICES
                </span>

              </div>

              <div className="absolute bottom-[18%] right-[14%] flex items-center gap-3">

                <span className="text-[10px] text-white/30">
                  INTELLIGENCE
                </span>

                <span className="h-2 w-2 rounded-full bg-white/50" />

              </div>

              {/* Connecting lines */}
              <div className="absolute left-[20%] top-[28%] h-px w-[25%] rotate-[18deg] bg-white/10" />

              <div className="absolute right-[20%] top-[35%] h-px w-[25%] -rotate-[15deg] bg-white/10" />

              <div className="absolute bottom-[27%] left-[22%] h-px w-[24%] -rotate-[18deg] bg-white/10" />

              <div className="absolute bottom-[24%] right-[20%] h-px w-[25%] rotate-[20deg] bg-white/10" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}