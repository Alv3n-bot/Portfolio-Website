import React, { useState } from "react";

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="font-sans bg-[#FAF5EF] text-[#3C2F2F] overflow-x-hidden">
      {/* ===== NAVBAR ===== */}
      <header className="bg-[#B08968] text-white py-4 px-6 flex justify-between items-center relative shadow-md">
        <h1 className="text-xl font-semibold tracking-wide">Collins Alvin</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-lg">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Mobile Dropdown */}
        <div
          className={`absolute top-full left-0 w-full bg-[#B08968] flex-col items-center py-4 space-y-3 md:hidden shadow-lg transition-all duration-300 ${
            menuOpen ? "flex opacity-100" : "hidden opacity-0"
          }`}
        >
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section id="home" className="text-center py-16 px-6">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Frontend Developer &amp; UI Designer
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Crafting beautiful, responsive web experiences with modern technologies
          and thoughtful design principles.
        </p>
        <button className="bg-[#B08968] text-white px-6 py-3 rounded-lg hover:bg-[#8C6B54] transition">
          View My Work ✨
        </button>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="py-16 px-6 bg-[#F1E7DC] text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">About Me</h3>
        <p className="text-lg mb-10 max-w-xl mx-auto">
          Passionate about creating digital experiences that make a difference.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto">
          <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md w-64">
            <div className="w-24 h-24 bg-[#C9A888] rounded-full mb-4" />
            <h4 className="font-semibold text-lg">Collins Alvin</h4>
            <p className="text-sm text-[#5C4B3B]">Frontend Developer</p>
          </div>

          <div className="max-w-lg text-left">
            <p className="mb-6">
              Hello! I'm Alvin, a passionate developer with experience creating
              engaging web applications. I specialize in React and modern CSS
              frameworks, with a strong focus on user experience and performance
              optimization.
            </p>
            <ul className="flex flex-wrap gap-2">
              {["Git", "React", "Node.js", "JS", "Figma", "Sass", "Tailwind", "CSS3"].map(
                (skill) => (
                  <li
                    key={skill}
                    className="bg-[#B08968] text-white px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      

      {/* ===== CONTACT SECTION ===== */}
      <section
        id="contact"
        className="bg-[#F1E7DC] text-center py-16 px-6 flex flex-col items-center"
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Let's Work Together
        </h3>
        <p className="max-w-xl mb-6">
          Ready to bring your ideas to life? Let's discuss your next project.
          I'm always excited to collaborate on creative and impactful work.
        </p>
        <ul className="flex gap-6 text-[#B08968] font-medium">
          <li>
            <a href="#" className="hover:underline">
              GitHub
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:someone@example.com" className="hover:underline">
              Mail
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default LandingPage;