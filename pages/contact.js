import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-primary text-white px-6 py-12 md:px-20">
        <div className="max-w-xl mx-auto text-center space-y-6">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-mono text-accent">
            Contact
          </h1>

          {/* Message */}
          <p className="text-gray-300 font-mono text-lg">
            Want to connect, collab, or hire?  
            Reach out directly via email or socials below.
          </p>

          {/* Email */}
          <a
            href="mailto:retrovocoded@gmail.com"
            className="block text-accent text-lg font-mono hover:underline"
          >
            retrovocoded@gmail.com
          </a>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://github.com/praise-bit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-accent hover:underline decoration-accent transition font-mono"

            >
              arial-label="GitHub"
            </a>
            <a
              href="https://www.linkedin.com/in/praise-mark-egart-84a983369"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-accent hover:underline decoration-accent transition font-mono"

            >
              arial-label="LinkedIn"
            </a>
            <a
              href="https://x.com/nbcl26?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-accent hover:underline decoration-accent transition font-mono"

            >
              arial-label="Twitter/X"
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
