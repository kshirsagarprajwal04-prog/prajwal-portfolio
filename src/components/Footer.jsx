import { FaGithub, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-xl font-bold tracking-tight"
            >
              Prajwal<span className="text-cyan-400">.</span>
            </a>

            <p className="mt-2 text-sm text-slate-500">
              Frontend Developer building modern web experiences.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-5 text-sm text-slate-400">
            <a
              href="#about"
              className="transition hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="transition hover:text-cyan-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="transition hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="transition hover:text-cyan-400"
            >
              Contact
            </a>
          </div>

          {/* Social + Top */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/kshirsagarprajwal04-prog"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <FaArrowUp />
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Prajwal Kshirsagar. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;