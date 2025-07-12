"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <nav
      className={`w-full py-4 px-6 flex justify-between items-center border-b border-gray-700 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      } transition-all duration-500`}
    >
      <div className="text-primary font-bold text-xl">pscriptz</div>
      <div className="space-x-4">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={`text-sm ${
              pathname === link.path ? "text-primary underline" : "text-white"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
