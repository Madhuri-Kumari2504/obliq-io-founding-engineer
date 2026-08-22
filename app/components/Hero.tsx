"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen scroll-mt-24 overflow-hidden bg-[#050505] px-6 pt-32 text-white lg:px-8"
    >
      {/* ========================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[140px]" />

      {/* ========================================================= */}
      {/* BACKGROUND GRID */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ========================================================= */}
      {/* MAIN CONTAINER */}
      {/* ========================================================= */}

      <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* ===================================================== */}
          {/* LEFT SIDE */}
          {/* ===================================================== */}

          <div>

            {/* Badge */}

            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/60 backdrop-blur-xl">

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              Building the future of intelligent infrastructure

            </div>

            {/* Main heading */}

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[84px]">

              Infrastructure

              <br />

              for{" "}

              <span className="bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent">
                the intelligent
              </span>

              <br />

              era.

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-base leading-8 text-white/50 sm:text-lg">
              Obliq-io gives ambitious teams the infrastructure, tools, and
              intelligence required to build, deploy, and scale
              next-generation software.
            </p>

            {/* ===================================================== */}
            {/* HERO CTA BUTTONS */}
            {/* ===================================================== */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              {/* START BUILDING → FINAL CTA */}

              <a
                href="#contact"
                aria-label="Start building with Obliq"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-white/90"
              >
                Start building

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* EXPLORE PLATFORM → PLATFORM */}

              <a
                href="#platform"
                aria-label="Explore the Obliq platform"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05] hover:text-white"
              >
                Explore platform
              </a>

            </div>

            {/* ===================================================== */}
            {/* TRUST INFORMATION */}
            {/* ===================================================== */}

            <div className="mt-12 flex items-center gap-4">

              <div className="flex -space-x-2">

                <div
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#050505] bg-white/10 text-[10px] text-white/50"
                >
                  AI
                </div>

                <div
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#050505] bg-white/20 text-[10px] text-white/60"
                >
                  ML
                </div>

                <div
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#050505] bg-white/30 text-[10px] text-white/70"
                >
                  DX
                </div>

              </div>

              <div>

                <p className="text-xs font-medium text-white/60">
                  Built for engineers
                </p>

                <p className="mt-1 text-xs text-white/30">
                  Who move fast and build what matters.
                </p>

              </div>

            </div>

          </div>

          {/* ===================================================== */}
          {/* RIGHT SIDE — PRODUCT VISUAL */}
          {/* ===================================================== */}

          <div className="relative">

            {/* Outer glow */}

            <div className="absolute -inset-16 rounded-full bg-white/[0.035] blur-[100px]" />

            {/* Dashboard */}

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] shadow-2xl backdrop-blur-xl">

              {/* Browser header */}

              <div className="flex h-14 items-center justify-between border-b border-white/10 px-5">

                <div className="flex gap-2">

                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

                </div>

                <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                  obliq / control center
                </span>

              </div>

              {/* Dashboard body */}

              <div className="p-6 sm:p-8">

                {/* Status */}

                <div className="flex items-start justify-between">

                  <div>

                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                      System status
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                      Operational
                    </h2>

                    <div className="mt-2 flex items-center gap-2 text-xs text-emerald-400">

                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                      All systems nominal

                    </div>

                  </div>

                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-[10px] text-emerald-400">
                    LIVE
                  </div>

                </div>

                {/* ================================================= */}
                {/* GRAPH */}
                {/* ================================================= */}

                <div className="relative mt-8 h-52 overflow-hidden rounded-2xl border border-white/10 bg-black/30">

                  {/* Grid */}

                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />

                  {/* Graph */}

                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 600 220"
                    preserveAspectRatio="none"
                    aria-label="System performance graph"
                    role="img"
                  >

                    <path
                      d="M0 180 C40 175 55 140 90 155 C125 170 140 120 175 135 C210 150 230 90 265 115 C300 140 315 75 350 95 C385 115 405 70 440 85 C475 100 500 45 535 60 C560 70 580 35 600 40"
                      fill="none"
                      stroke="rgba(255,255,255,0.85)"
                      strokeWidth="2"
                    />

                    <path
                      d="M0 180 C40 175 55 140 90 155 C125 170 140 120 175 135 C210 150 230 90 265 115 C300 140 315 75 350 95 C385 115 405 70 440 85 C475 100 500 45 535 60 C560 70 580 35 600 40 L600 220 L0 220 Z"
                      fill="url(#heroGradient)"
                      opacity="0.10"
                    />

                    <defs>

                      <linearGradient
                        id="heroGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >

                        <stop
                          offset="0%"
                          stopColor="white"
                        />

                        <stop
                          offset="100%"
                          stopColor="transparent"
                        />

                      </linearGradient>

                    </defs>

                  </svg>

                  {/* Graph label */}

                  <div className="absolute left-4 top-4 text-[9px] uppercase tracking-wider text-white/20">
                    System performance
                  </div>

                </div>

                {/* ================================================= */}
                {/* METRICS */}
                {/* ================================================= */}

                <div className="mt-5 grid grid-cols-3 gap-3">

                  {/* COMPUTE */}

                  <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">

                    <p className="text-[10px] text-white/30">
                      COMPUTE
                    </p>

                    <p className="mt-2 text-lg font-medium">
                      84%
                    </p>

                    <p className="mt-1 text-[9px] text-emerald-400">
                      +4.2%
                    </p>

                  </div>

                  {/* INFERENCE */}

                  <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">

                    <p className="text-[10px] text-white/30">
                      INFERENCE
                    </p>

                    <p className="mt-2 text-lg font-medium">
                      12ms
                    </p>

                    <p className="mt-1 text-[9px] text-emerald-400">
                      -2.1ms
                    </p>

                  </div>

                  {/* STORAGE */}

                  <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">

                    <p className="text-[10px] text-white/30">
                      STORAGE
                    </p>

                    <p className="mt-2 text-lg font-medium">
                      2.4TB
                    </p>

                    <p className="mt-1 text-[9px] text-white/30">
                      Stable
                    </p>

                  </div>

                </div>

                {/* ================================================= */}
                {/* BOTTOM STATUS */}
                {/* ================================================= */}

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">

                  <div className="flex items-center gap-2">

                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                    <span className="text-[10px] text-white/30">
                      Infrastructure healthy
                    </span>

                  </div>

                  <span className="text-[10px] text-white/20">
                    Updated just now
                  </span>

                </div>

              </div>

            </div>

            {/* ===================================================== */}
            {/* FLOATING STATUS CARD */}
            {/* ===================================================== */}

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-[#0b0b0b]/90 p-4 shadow-2xl backdrop-blur-xl sm:block">

              <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                Global uptime
              </p>

              <p className="mt-2 text-2xl font-semibold">
                99.99%
              </p>

              <p className="mt-1 text-[9px] text-emerald-400">
                ● All regions operational
              </p>

            </div>

          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* BOTTOM SCROLL INDICATOR */}
      {/* ========================================================= */}

      <a
        href="#platform"
        aria-label="Scroll to platform section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/20 transition hover:text-white/50 md:flex"
      >

        <span className="text-[9px] uppercase tracking-[0.3em]">
          Scroll to explore
        </span>

        <div className="h-10 w-px bg-gradient-to-b from-white/30 to-transparent" />

      </a>

    </section>
  );
}