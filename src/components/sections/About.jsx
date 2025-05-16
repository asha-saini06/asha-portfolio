import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "Next.js", "TailwindCSS", "JavaScript", "Material-UI", "Liquid"];
  const backendSkills = ["Node.js", "Express.js", "MongoDB", "Java"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-sky-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-4">
            Frontend developer specializing in intuitive UI, responsive design, and transforming ideas into elegant web solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech) => (
                  <span
                    className="bg-emerald-500/10 text-emerald-400 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 hover:shadow-[0_2px_8px_rgba(16,185,129,0.1)] transition-all"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech) => (
                  <span
                    className="bg-emerald-500/10 text-emerald-400 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 hover:shadow-[0_2px_8px_rgba(16,185,129,0.1)] transition-all"            
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
          <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">📚 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>MCA in Computer Science and Engineering</strong> - GITAM, MDU (2017 - 2020)
              </li>
              <li>
                <strong>Bsc. in Physical Sciences </strong> - Kalindi College, DU (2014 - 2017)
              </li>
            </ul>
          </div>
          <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">MERN Stack Internship at EY GDS & AICTE (2025)</h4>
                <p>Hands-on MERN stack web development training.</p>
              </div>
              <div>
                <h4 className="font-semibold">Full Stack Developer Intern at TripFox (2024)</h4>
                <p>Developed ReactJS frontend and led team/project coordination.</p>
              </div>
              <div>
                <h4 className="font-semibold">Frontend Developer Intern at MakkPress Technologies (2021-2022)</h4>
                <p>Assisted in translating client designs into responsive, interactive web pages.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
