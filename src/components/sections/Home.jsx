
export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent   leading-right">
          Hi, I&apos;m Asha Saini
        </h1>

        <p className="text-lg mb-8 max-w-lg text-gray-400 mx-auto">
          I&apos;m a Frontend Developer passionate about building seamless, responsive, and visually appealing web experiences.
          I love solving challenges with clean code and intuitive design. Always learning, always evolving.
        </p>

        <div className="flex justify-center space-x-4">
          <a href="#projects" className="bg-emerald-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]">View Projects</a>
          <a href="#contact" className="border border-emerald-500/50 text-emerald-500 py-3 px-6 rounded font-medium transition-all duration-200  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:bg-emerald-500/10">Contact Me</a>
        </div>
      </div>
    </section>
  )
}
