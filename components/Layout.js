// 'use client' not needed here
import "../globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "pscriptz | Portfolio",
  description: "Web3 Developer Portfolio by Praise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="px-6 py-4">{children}</main>
      </body>
    </html>
  );
}
