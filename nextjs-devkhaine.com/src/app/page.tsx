// DevKhaine.online starter template using your branding + Navbar

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#projects" },
  { name: "Tutorials", href: "#tutorials" },
  { name: "Tech News", href: "#news" },
  { name: "About", href: "#about" }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#121212] text-[#E0E6ED] font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-[#2A2A2A] bg-[#121212] sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="DevKhaine Logo" className="h-10 w-auto" />
          <h1 className="text-2xl font-bold tracking-widest">
            DEV<span className="text-blue-500">|</span>KHAINE
          </h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <button className="md:hidden text-gray-300">
          <Menu size={24} />
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center mb-10 px-6 py-10">
        <div className="flex justify-center mb-4">
          <img
            src="/logo.png"
            alt="DevKhaine Logo"
            className="h-20 w-auto"
          />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-widest">
          DEV<span className="text-blue-500">|</span>KHAINE
        </h2>
        <p className="text-lg md:text-xl mt-4 text-gray-400">
          Tutorials, Projects, and Tech News with a Dark Vibe
        </p>
      </section>

      {/* Sections */}
      <section className="grid md:grid-cols-3 gap-6 px-6 pb-12">
        <Card className="bg-[#1F1F1F]" id="projects">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">🚀 Projects</h2>
            <p className="text-gray-400 text-sm">
              Explore what I’ve been building—from web apps to hacker tools.
            </p>
            <Button className="mt-4">View Projects</Button>
          </CardContent>
        </Card>

        <Card className="bg-[#1F1F1F]" id="tutorials">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">📚 Tutorials</h2>
            <p className="text-gray-400 text-sm">
              Step-by-step guides on development, hacking, and dev tools.
            </p>
            <Button className="mt-4">Read Tutorials</Button>
          </CardContent>
        </Card>

        <Card className="bg-[#1F1F1F]" id="news">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">📰 Tech News</h2>
            <p className="text-gray-400 text-sm">
              Stay updated with weekly tech summaries and dev trends.
            </p>
            <Button className="mt-4">See What’s New</Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
