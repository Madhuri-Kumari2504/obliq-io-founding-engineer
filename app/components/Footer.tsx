"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] text-white">

      {/* MAIN FOOTER */}

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* BRAND */}

          <div>

            <a
              href="#top"
              className="inline-flex items-center gap-2"
            >

              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                <span className="text-[10px] font-semibold text-white/60">
                  O
                </span>
              </div>

              <span className="text-sm font-semibold tracking-tight text-white/70">
                obliq.io
              </span>

            </a>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/25">
              Infrastructure, intelligence and operational
              tools for teams building what comes next.
            </p>

            <div className="mt-8 flex items-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              <span className="text-[8px] uppercase tracking-[0.2em] text-emerald-400/70">
                All systems operational
              </span>

            </div>

          </div>


          {/* PLATFORM */}

          <FooterColumn
            title="Platform"
            links={[
              {
                label: "Platform",
                href: "#platform",
              },
              {
                label: "Features",
                href: "#features",
              },
              {
                label: "Workflow",
                href: "#workflow",
              },
              {
                label: "Intelligence",
                href: "#operational-intelligence",
              },
            ]}
          />


          {/* PRODUCT */}

          <FooterColumn
            title="Product"
            links={[
              {
                label: "AI Compliance",
                href: "#ai-compliance",
              },
              {
                label: "Documents",
                href: "#documents",
              },
              {
                label: "Control Center",
                href: "#control-center",
              },
              {
                label: "Client 360",
                href: "#client-intelligence",
              },
            ]}
          />


          {/* COMPANY */}

          <FooterColumn
            title="Company"
            links={[
              {
                label: "About",
                href: "#about",
              },
              {
                label: "Get started",
                href: "#contact",
              },
              {
                label: "Back to top",
                href: "#top",
              },
            ]}
          />

        </div>


        {/* DIVIDER */}

        <div className="mt-16 h-px bg-white/10" />


        {/* BOTTOM */}

        <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[8px] text-white/20">
            © 2026 Obliq-io. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <span className="text-[8px] text-white/15">
              Intelligent infrastructure
            </span>

            <span className="hidden h-3 w-px bg-white/10 sm:block" />

            <span className="flex items-center gap-2 text-[8px] text-white/20">

              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              Operational

            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}


/* ========================================================= */
/* FOOTER COLUMN                                               */
/* ========================================================= */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}) {
  return (
    <div>

      <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
        {title}
      </p>

      <div className="mt-6 space-y-4">

        {links.map((link) => (

          <a
            key={link.label}
            href={link.href}
            className="block w-fit text-[9px] text-white/35 transition hover:text-white/70"
          >
            {link.label}
          </a>

        ))}

      </div>

    </div>
  );
}