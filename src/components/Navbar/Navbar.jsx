import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Only five main navigation links
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  // Detect the currently visible section
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Smooth scrolling
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();

    const section = document.getElementById(sectionId);

    if (section) {
      setActiveSection(sectionId);

      const navbarHeight = 85;
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: Math.max(0, sectionPosition - navbarHeight),
        behavior: "smooth",
      });

      window.history.replaceState(null, "", `#${sectionId}`);
    }

    setMenuOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-black/85 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "home")}
          className="shrink-0 text-base font-black tracking-wide text-white transition duration-300 hover:text-cyan-300 sm:text-xl"
        >
          RAMACHANDRA<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                aria-current={isActive ? "location" : undefined}
                className={`group relative whitespace-nowrap px-1 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}

                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-cyan-400 transition-all duration-300 ${
                    isActive
                      ? "w-full shadow-[0_0_10px_rgba(34,211,238,0.7)]"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Let's Talk Button */}
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, "contact")}
          className="hidden shrink-0 items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/[0.04] px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_22px_rgba(34,211,238,0.2)] sm:inline-flex"
        >
          Let's Talk
          <span aria-hidden="true">↗</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-2xl text-cyan-400 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 xl:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="absolute inset-x-0 top-full border-b border-white/10 bg-black/95 px-5 py-5 shadow-2xl backdrop-blur-xl xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  aria-current={isActive ? "location" : undefined}
                  className={`flex items-center rounded-lg border-l-2 px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "border-cyan-400 bg-cyan-400/10 text-cyan-300"
                      : "border-transparent text-gray-400 hover:border-cyan-400/50 hover:bg-white/[0.03] hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            {/* Mobile Let's Talk Button */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="mt-3 rounded-full bg-cyan-400 px-5 py-3 text-center text-sm font-bold text-black transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
            >
              Let's Talk ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;