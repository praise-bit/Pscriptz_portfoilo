export default function About() {
  return (
    <main className="min-h-screen bg-primary text-white px-6 py-16 md:px-20">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-mono text-accent text-center">
          About Me
        </h1>

        {/* Intro */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-mono">
          I'm{" "}
          <span className="text-accent font-bold">Mark Egart PraiseGod</span>, a
          frontend & Web3 developer passionate about building fast, responsive,
          and decentralized user experiences. I enjoy mixing creativity with
          logic to bring clean ideas to life in the browser.
        </p>

        {/* Journey */}
        <div className="space-y-4">
          <h2 className="text-2xl text-accent font-mono">My Journey</h2>
          <p className="text-gray-400 font-mono">
            I started my dev journey learning HTML, CSS and JavaScript. Over
            time, I moved into React and modern frontend workflows. Now I'm
            focused on dApps, smart contracts, and full-stack Web3 development
            using Solidity and tools like Hardhat.
          </p>
          <p className="text-gray-400 font-mono">
            I love clean UI, fast UX, and bringing creative concepts to life —
            whether it's a portfolio, a productivity tool, or an onchain app.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="space-y-4">
          <h2 className="text-2xl text-accent font-mono">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-300 font-mono">
            <span className="bg-secondary px-3 py-2 rounded-xl text-center">
              HTML
            </span>
            <span className="bg-secondary px-3 py-2 rounded-xl text-center">
              CSS
            </span>
            <span className="bg-secondary px-3 py-2 rounded-xl text-center">
              JavaScript
            </span>
            <span className="bg-secondary px-3 py-2 rounded-xl text-center">
              React
            </span>
            <span className="bg-secondary px-3 py-2 rounded-xl text-center">
              Tailwind CSS
            </span>
            <span className="bg-secondary px-3 py-2 rounded-xl text-center">
              Next.js
            </span>
            <span className="bg-secondary px-3 py-2 rounded-xl text-center">
              Solidity
            </span>
            <span className="bg-secondary px-3 py-2 rounded-xl text-center">
              ethers.js
            </span>
            <span className="bg-secondary px-3 py-2 rounded-xl text-center">
              Git/GitHub
            </span>
            <span className="bg-secondary px-3 py-2 rounded-xl text-center">
              Figma
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
