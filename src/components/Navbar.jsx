import React, { useEffect, useState } from "react";
import { Moon, Sun, User, BadgeCheck, Briefcase, Code2, Mail } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const navLinks = [
    { name: "About", path: "/", icon: User },
    { name: "Skills", path: "/", icon: BadgeCheck },
    { name: "Experience", path: "/", icon: Briefcase },
    { name: "Projects", path: "/", icon: Code2 },
    { name: "Contact", path: "/", icon: Mail },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-4 md:px-8 lg:px-12 xl:px-20 transition-all duration-500 flex items-center justify-between ${
        isScrolled
          ? "bg-white dark:bg-[#1e2533] shadow-md backdrop-blur-md py-3 md:py-4"
          : "bg-gray-200 dark:bg-[#3469c6] py-4 md:py-6 border-gray-200 dark:border-gray-800"
      }`}
    >
      {/* Logo */}
      <a href="/" className="flex items-center group">
        <h1 className="text-xl md:text-2xl font-poppins font-semibold tracking-tight text-[#1e293b] dark:text-white transition">
          <span className="text-[#3b82f6] dark:text-[#60a5fa]">&lt;/&gt;</span>{" "}
          <span className="transition-all duration-300 group-hover:tracking-widest group-hover:text-[#3b82f6] dark:group-hover:text-[#60a5fa]">
            Mohit
          </span>
        </h1>
      </a>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        {navLinks.map((link, i) => {
          const Icon = link.icon;
          return (
            <a
              key={i}
              href={link.path}
              className={`group flex items-center gap-2 font-inter text-base md:text-lg transition-colors duration-300 relative text-[#1e293b] dark:text-white`}
            >
              <Icon className="w-5 h-5 transition-transform group-hover:scale-110 duration-300" />
              <span>{link.name}</span>
              {/* Underline animation */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3b82f6] dark:bg-[#60a5fa] transition-all duration-300 group-hover:w-full"></span>
            </a>
          );
        })}

        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-[#1e293b] dark:text-white transition"
          title="Toggle theme"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden items-center gap-2">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-[#1e293b] dark:text-white"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-6 w-6 cursor-pointer text-[#1e293b] dark:text-white`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white dark:bg-[#0f172a] text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-[#1e293b] dark:text-white transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6 text-[#1e293b] dark:text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => {
          const Icon = link.icon;
          return (
            <a
              key={i}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="group flex items-center gap-3 text-xl font-poppins hover:text-[#3b82f6] dark:hover:text-[#60a5fa]"
            >
              <Icon className="w-5 h-5" />
              {link.name}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
