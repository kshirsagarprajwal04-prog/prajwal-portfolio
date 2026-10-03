import { FaEnvelope, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Let's work together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Have a project, opportunity, or idea you'd like to discuss?
            Feel free to get in touch.
          </p>
        </div>

        {/* Contact Card */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">

          <div className="grid gap-4 sm:grid-cols-2">

            {/* Email */}
            <a
              href="mailto:kshirsagarprajwal04@gmail.com"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40 hover:bg-cyan-400/5"
            >
              <FaEnvelope className="text-2xl text-cyan-400 transition group-hover:scale-110" />

              <h3 className="mt-4 font-semibold">
                Email
              </h3>

              <p className="mt-2 break-all text-sm text-slate-400">
                kshirsagarprajwal04@gmail.com
              </p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/kshirsagarprajwal04-prog"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40 hover:bg-cyan-400/5"
            >
              <FaGithub className="text-2xl text-cyan-400 transition group-hover:scale-110" />

              <h3 className="mt-4 font-semibold">
                GitHub
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                View my projects and code
              </p>
            </a>

          </div>

          {/* Email Button */}
          <div className="mt-8 text-center">
            <a
              href="mailto:kshirsagarprajwal04@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <FaEnvelope />
              Send Me an Email
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;