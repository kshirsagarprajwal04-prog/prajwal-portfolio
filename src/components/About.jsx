function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
          About Me
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Turning ideas into interactive experiences.
        </h2>

        <div className="max-w-3xl">
          <p className="text-gray-400 text-lg leading-8">
            I'm Prajwal Kshirsagar, a frontend developer based in Pune,
            Maharashtra. I enjoy learning modern web development and
            building responsive, interactive interfaces.
          </p>

          <p className="text-gray-400 text-lg leading-8 mt-6">
            I'm currently improving my skills through hands-on practice
            and personal projects, including SmartStudy AI.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;