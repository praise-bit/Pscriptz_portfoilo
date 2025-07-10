import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const linkStyle = (path) =>
    `hover:text-accent transition ${
      router.pathname === path ? "text-accent font-semibold" : "text-gray-300"
    }`;

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-primary border-b border-secondary px-6 md:px-20 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link
        href="/"
        className="text-xl md:text-2xl text-accent font-mono font-bold"
      >
        pscriptz
      </Link>

      {/* Links */}
      <div className="space-x-6 text-sm md:text-base font-mono">
        <Link href="/" className={linkStyle("/")}>
          Home
        </Link>
        <Link href="/about" className={linkStyle("/about")}>
          About
        </Link>
        <Link href="/projects" className={linkStyle("/projects")}>
          Projects
        </Link>
        <Link href="/contact" className={linkStyle("/contact")}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
