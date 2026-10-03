import { projects } from "../data/portfolio";

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
          Selected Work
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Projects I'm working on.
        </h2>

        <p className="text-gray-400 max-w-2xl mb-12">
          A look at the projects I am currently building and exploring.
        </p>

        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
          >
            <div className="mb-8">
              <p className="text-cyan-400 text-sm mb-3">
                {project.category}
              </p>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 max-w-3xl leading-7">
                {project.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

              <div>
                <h4 className="text-white font-semibold mb-3">
                  Current Focus
                </h4>

                <p className="text-gray-400 leading-7">
                  {project.contribution}
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">
                  Status
                </h4>

                <p className="text-gray-400 leading-7">
                  Currently under development.
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;