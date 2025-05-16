import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_2px_8px_rgba(16,185,129,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Forecastify</h3>
              <p className="text-gray-400 mb-4">
                Next.js web application for fetching and displaying current
                weather forecasts using the OpenWeatherMap API.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "Tailwind CSS", "OpenWeatherMap API"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-emerald-500/10 text-emerald-400 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 hover:shadow-[0_2px_8px_rgba(16,185,129,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/asha-saini06/forecastify"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors my-4" target="_blank" 
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_4px_20px_rgba(16,185,129,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Relay Chat App</h3>
              <p className="text-gray-400 mb-4">
                Real-time chat app built with MERN stack, Socket.io, TailwindCSS, and Daisy UI. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MERN", "TailwindCSS", "JWT", "Socket.io", "Daisy UI"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-emerald-500/10 text-emerald-400 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(16,185,129,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/asha-saini06/relay-chat-app"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors my-4" target="_blank" 
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_4px_20px_rgba(16,185,129,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Instagram Clone</h3>
              <p className="text-gray-400 mb-4">
                Instagram Clone project with core features like user authentication, profile management, photo sharing, feed, likes, comments.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Firebase", "React-Router", "Chakra UI"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-emerald-500/10 text-emerald-400 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(16,185,129,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/asha-saini06/instagram-clone"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors my-4" target="_blank" 
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_4px_20px_rgba(16,185,129,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">ShopEase</h3>
              <p className="text-gray-400 mb-4">
                A simple shopping list app, designed for easy creation of shopping lists.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript", "Firebase", "Netlify"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-emerald-500/10 text-emerald-400 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(16,185,129,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/asha-saini06/ShopEase"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors my-4" target="_blank" 
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
