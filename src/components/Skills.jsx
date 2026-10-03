import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive and interactive web interfaces.",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Tools",
    description: "Tools I use for development and project workflow.",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: null },
      { name: "Vite", icon: SiVite },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            Technologies I work with
          </h2>

          <p className="mt-5 max-w-2xl text-slate-400">
            A focused set of technologies I use to design, develop and build
            modern web interfaces.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-2xl font-semibold">
                {group.title}
              </h3>

              <p className="mt-3 text-slate-400">
                {group.description}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      {Icon && (
                        <Icon className="text-xl text-cyan-400" />
                      )}

                      <span className="text-sm text-slate-200">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;