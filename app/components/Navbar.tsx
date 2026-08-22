import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* ============================= */}
        {/* LOGO */}
        {/* ============================= */}

        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-white transition-opacity hover:opacity-80"
        >
          obliq<span className="text-white/40">.</span>io
        </Link>

        {/* ============================= */}
        {/* DESKTOP NAVIGATION */}
        {/* ============================= */}

        <div className="hidden items-center gap-8 md:flex">

          {/* Platform */}
          <Link
            href="#platform"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Platform
          </Link>

          {/* Features */}
          <Link
            href="#features"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Features
          </Link>

          {/* Workflow */}
          <Link
            href="#workflow"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Workflow
          </Link>

          {/* About */}
          <Link
            href="#operational-intelligence"
            className="text-sm text-white/60 transition hover:text-white"
          >
            About
          </Link>

          {/* ============================= */}
          {/* DASHBOARD */}
          {/* ============================= */}

          <Link
            href="/dashboard"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Dashboard
          </Link>

        </div>

        {/* ============================= */}
        {/* RIGHT SIDE CTA */}
        {/* ============================= */}

        <div className="flex items-center gap-3">

          {/* Dashboard Button */}
          <Link
            href="/dashboard"
            className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10 sm:inline-flex"
          >
            Open Dashboard
          </Link>

          {/* Get Started */}
          <Link
            href="/dashboard"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-105 hover:bg-white/90"
          >
            Get started
          </Link>

        </div>

      </nav>
    </header>
  );
}