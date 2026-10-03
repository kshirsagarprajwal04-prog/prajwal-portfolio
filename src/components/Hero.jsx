function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-24 text-white"
    >
      {/* Background glow */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div>
          <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            <span className="h-px w-10 bg-cyan-400" />
            Frontend Developer
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm
            <span className="mt-2 block bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              Prajwal Kshirsagar
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            Building modern, responsive and interactive web experiences
            with clean interfaces and thoughtful user experiences.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              View My Work →
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="mt-9 flex items-center gap-4">
            <span className="text-sm text-slate-500">
              Find me on
            </span>

            <a
              href="#"
              aria-label="GitHub"
              className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — CODE WINDOW */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-cyan-400/5 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">

            {/* Window header */}
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />

              <span className="ml-3 text-xs text-slate-500">
                developer.js
              </span>
            </div>

            {/* Code */}
            <div className="overflow-x-auto p-6 font-mono text-sm leading-8">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-300">developer</span>{" "}
                = {"{"}
              </p>

              <p className="pl-6">
                <span className="text-slate-400">name:</span>{" "}
                <span className="text-green-300">
                  "Prajwal Kshirsagar"
                </span>,
              </p>

              <p className="pl-6">
                <span className="text-slate-400">role:</span>{" "}
                <span className="text-green-300">
                  "Frontend Developer"
                </span>,
              </p>

              <p className="pl-6">
                <span className="text-slate-400">stack:</span> [
              </p>

              <p className="pl-12 text-orange-300">
                "React",
              </p>

              <p className="pl-12 text-orange-300">
                "JavaScript",
              </p>

              <p className="pl-12 text-orange-300">
                "Tailwind CSS",
              </p>

              <p className="pl-6">],</p>

              <p className="pl-6">
                <span className="text-slate-400">focus:</span>{" "}
                <span className="text-green-300">
                  "Great user experiences"
                </span>
              </p>

              <p>{"};"}</p>

              <p className="mt-4 text-slate-500">
                // Let's build something meaningful.
              </p>
            </div>

            {/* Bottom status */}
            <div className="border-t border-white/10 px-5 py-3">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                Available for opportunities
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <a
          href="#about"
          className="text-xs uppercase tracking-[0.3em] text-slate-600 transition hover:text-cyan-400"
        >
          Scroll ↓
        </a>
      </div>
    </section>
  );
}

export default Hero;