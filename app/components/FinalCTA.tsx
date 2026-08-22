"use client";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 py-32 text-white lg:px-8"
    >
      {/* ========================================================= */}
      {/* BACKGROUND */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[180px]" />

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

      {/* ========================================================= */}
      {/* CONTENT */}
      {/* ========================================================= */}

      <div className="relative mx-auto max-w-5xl text-center">

        {/* SECTION LABEL */}

        <div className="flex items-center justify-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
            <span className="text-xs text-white/50">
              11
            </span>
          </div>

          <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
            Final CTA
          </span>
        </div>

        {/* DIVIDER */}

        <div className="mx-auto mt-6 h-px w-16 bg-white/30" />

        {/* HEADLINE */}

        <h2 className="mx-auto mt-10 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
          Ready to take control?
        </h2>

        {/* SECONDARY HEADLINE */}

        <p className="mx-auto mt-7 max-w-2xl text-xl leading-8 text-white/35 sm:text-2xl">
          From compliance intelligence
          <br className="hidden sm:block" />
          to operational action.
        </p>

        {/* DESCRIPTION */}

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/25">
          One intelligent workspace for clients,
          documents, deadlines, compliance actions
          and operational decisions.
        </p>

        {/* ========================================================= */}
        {/* CTA BUTTONS */}
        {/* ========================================================= */}

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">

          {/* Explore Platform */}

          <a
            href="#control-center"
            aria-label="Explore the Compliance Control Center"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition duration-200 hover:bg-white/80 active:scale-[0.98]"
          >
            Explore the platform

            <span className="ml-2">
              →
            </span>
          </a>

          {/* See How It Works */}

          <a
            href="#workflow"
            aria-label="See how the Obliq workflow works"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 px-6 py-3 text-sm text-white/45 transition duration-200 hover:border-white/20 hover:text-white/70 active:scale-[0.98]"
          >
            See how it works
          </a>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM SIGNALS */}
        {/* ========================================================= */}

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">

          <Signal
            label="CLIENTS"
            value="248"
            description="Connected workspaces"
          />

          <Signal
            label="DOCUMENTS"
            value="1,248"
            description="Processed intelligently"
          />

          <Signal
            label="COMPLIANCE"
            value="86%"
            description="Operational health"
          />

        </div>

      </div>
    </section>
  );
}


/* ========================================================= */
/* SIGNAL                                                       */
/* ========================================================= */

function Signal({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="bg-[#080808] px-6 py-7">

      <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
        {label}
      </p>

      <p className="mt-4 text-2xl font-semibold text-white/65">
        {value}
      </p>

      <p className="mt-2 text-[8px] text-white/20">
        {description}
      </p>

    </div>
  );
}