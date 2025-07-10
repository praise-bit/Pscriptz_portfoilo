import Navbar from "../components/Navbar";

export default function Projects() {
  const projects = [
    {
      title: "Taskflow Pro",
      description:
        "A sleek productivity app built with React and Tailwind for managing tasks efficiently.",
      stack: ["React", "Tailwind CSS", "Framer Motion"],
      live: "https://taskflow.vercel.app",
      github: "https://github.com/yourgithub/taskflow-pro",
    },
    {
      title: "Shellzz UI",
      description:
        "Mockup UI/UX project for a Telegram-based crypto community, designed for engagement.",
      stack: ["Figma", "Webflow", "UI Design"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-primary text-white px-6 py-12 md:px-20">
        <h1 className="text-4xl md:text-5xl font-mono text-accent mb-12 text-center">
          Projects
        </h1>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-secondary rounded-xl p-6 border border-accent/10 hover:border-accent/40 transition shadow-lg hover:shadow-accent/20"
            >
              <h2 className="text-2xl text-accent font-mono mb-2">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-primary border border-accent text-accent text-xs px-2 py-1 rounded font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm font-mono">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
