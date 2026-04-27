import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#work", label: "Portfolio" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Detect active section only when scrolled
      if (window.scrollY > 300) {
        let found = false;
        for (const link of links) {
          const id = link.href.replace("#", "");
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 120 && rect.top >= -500) {
              setActiveSection(link.href);
              found = true;
              break;
            }
          }
        }
        if (!found) {
          setActiveSection("");
        }
      } else {
        setActiveSection("");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLinkActive = (href) => activeSection === href;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="container px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-6 py-3.5 transition-all duration-500 border ${
            scrolled
              ? "glass-light shadow-lg border-white/10"
              : "glass-light shadow-md border-white/5 backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-2.5 group flex-shrink-0"
          >
            <img
              src={logo}
              alt="Codecelix Logo"
              className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-display font-bold text-lg tracking-tight hidden sm:inline">
              AI Lead <span className="text-gradient-brand">Gen</span>
            </span>
            <span className="font-display font-bold text-lg tracking-tight sm:hidden">
              AI-Lead <span className="text-gradient-brand">Gen</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                    isLinkActive(l.href)
                      ? "text-foreground bg-foreground/15"
                      : "text-foreground/70 hover:text-foreground hover:bg-white/10"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-10 px-5 rounded-lg text-sm font-semibold bg-gradient-cta text-accent-foreground shadow-cta hover:shadow-lg hover:scale-[1.05] transition-all duration-300 active:scale-95"
            >
              Book Free Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            className="lg:hidden p-2.5 rounded-lg hover:bg-white/10 transition-colors duration-300 flex-shrink-0"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="w-5 h-5" strokeWidth={2.5} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={2.5} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden mt-3 glass-light rounded-2xl p-5 shadow-lg border border-white/10 animate-fade-in-up">
            <ul className="flex flex-col gap-1.5 mb-5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isLinkActive(l.href)
                        ? "text-foreground bg-foreground/15"
                        : "text-foreground/70 hover:text-foreground hover:bg-white/10"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center w-full h-10 leading-10 rounded-lg text-sm font-semibold bg-gradient-cta text-accent-foreground shadow-cta hover:shadow-lg transition-all duration-300"
            >
              Book Free Call
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
