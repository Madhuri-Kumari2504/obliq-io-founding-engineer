"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    setIsLoading(true);

    /*
      Demo authentication for the prototype.

      Demo credentials:
      Email: admin@obliq.io
      Password: obliq123
    */

    setTimeout(() => {
      if (
        email.trim().toLowerCase() === "admin@obliq.io" &&
        password === "obliq123"
      ) {
        if (rememberMe) {
          localStorage.setItem("obliq-auth", "true");
        } else {
          sessionStorage.setItem("obliq-auth", "true");
        }

        router.push("/dashboard");
      } else {
        setError("Invalid email or password.");
        setIsLoading(false);
      }
    }, 700);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[120px]" />

        <div className="absolute bottom-[-180px] left-[-120px] h-[350px] w-[350px] rounded-full bg-white/[0.03] blur-[100px]" />

        <div className="absolute right-[-100px] top-1/3 h-[300px] w-[300px] rounded-full bg-white/[0.03] blur-[100px]" />
      </div>

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Top navigation */}
      <header className="relative z-10 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-white transition-opacity hover:opacity-70"
          >
            obliq<span className="text-white/40">.</span>io
          </Link>

          <Link
            href="/"
            className="text-sm text-white/50 transition hover:text-white"
          >
            ← Back to website
          </Link>
        </div>
      </header>

      {/* Main content */}
      <section className="relative z-10 flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-16">
        <div className="w-full max-w-[440px]">

          {/* Heading */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] shadow-2xl">
              <span className="text-lg font-semibold">O</span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Welcome back
            </h1>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-white/45">
              Sign in to your Obliq workspace and manage your compliance
              operations from one place.
            </p>
          </div>

          {/* Login card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:p-8">

            {/* Card header */}
            <div className="mb-7">
              <h2 className="text-lg font-medium">
                Sign in to your account
              </h2>

              <p className="mt-1 text-sm text-white/40">
                Enter your credentials to continue.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white/75"
                >
                  Work email
                </label>

                <div className="relative">
                  <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                      />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </div>

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    autoComplete="email"
                    className="h-12 w-full rounded-xl border border-white/10 bg-black/30 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/30 focus:bg-black/50"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-white/75"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs text-white/40 transition hover:text-white"
                    onClick={() =>
                      alert(
                        "Password reset is not connected in this prototype."
                      )
                    }
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <rect
                        x="4"
                        y="10"
                        width="16"
                        height="11"
                        rx="2"
                      />
                      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                    </svg>
                  </div>

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="h-12 w-full rounded-xl border border-white/10 bg-black/30 pl-11 pr-12 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/30 focus:bg-black/50"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/35 transition hover:text-white"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <path d="M3 3l18 18" />
                        <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                        <path d="M9.9 4.2A10.8 10.8 0 0 1 12 4c5 0 8.7 4 10 8a15.7 15.7 0 0 1-3.1 5.1" />
                        <path d="M6.6 6.6C4.7 7.8 3.3 9.8 2 12c1.3 4 5 8 10 8 1.2 0 2.3-.2 3.3-.6" />
                      </svg>
                    ) : (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setRememberMe(!rememberMe)}
                  className={`flex h-4 w-4 items-center justify-center rounded border transition ${
                    rememberMe
                      ? "border-white bg-white"
                      : "border-white/20 bg-transparent"
                  }`}
                  aria-label="Remember me"
                >
                  {rememberMe && (
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="3"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  )}
                </button>

                <span className="text-xs text-white/45">
                  Keep me signed in
                </span>
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-xl border border-red-400/20 bg-red-400/[0.06] px-4 py-3">
                  <p className="text-sm text-red-300">
                    {error}
                  </p>
                </div>
              )}

              {/* Login button */}
              <button
                type="submit"
                disabled={isLoading}
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white text-sm font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign in

                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[11px] uppercase tracking-wider text-white/25">
                Secure workspace
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Security info */}
            <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.025] p-4">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M12 3 5 6v5c0 4.7 2.9 8.8 7 10 4.1-1.2 7-5.3 7-10V6l-7-3Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>

              <div>
                <p className="text-xs font-medium text-white/70">
                  Protected workspace
                </p>

                <p className="mt-1 text-[11px] leading-5 text-white/35">
                  Your compliance workspace is designed to keep operational
                  information organized and accessible to authorized users.
                </p>
              </div>
            </div>
          </div>

          {/* Demo credentials */}
          <div className="mt-5 rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-center">
            <p className="text-[11px] uppercase tracking-wider text-white/25">
              Prototype access
            </p>

            <p className="mt-2 text-xs text-white/40">
              admin@obliq.io
              <span className="mx-2 text-white/15">•</span>
              obliq123
            </p>
          </div>

          {/* Footer */}
          <p className="mt-8 text-center text-xs text-white/25">
            © 2026 Obliq-io. Compliance intelligence platform.
          </p>
        </div>
      </section>
    </main>
  );
}