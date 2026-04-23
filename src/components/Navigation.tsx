import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import cvdsLogo from "@/assets/cvds-logo-main.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#thesis", label: "Why Australia" },
    { href: "#approach", label: "Approach" },
    { href: "#focus", label: "Focus" },
    { href: "#model", label: "Model" },
    { href: "#partnerships", label: "Partnerships" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "py-3" : "py-4"}`}>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img src={cvdsLogo} alt="CVDS Digital Ventures" className="h-40 md:h-48 rounded-md" />
          </a>

          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.875rem] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary text-primary-foreground hover:bg-[hsl(var(--primary-dim))] transition-colors text-[0.875rem] font-semibold px-5 py-2 rounded-lg whitespace-nowrap"
            >
              Work with us
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-card transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 border-t border-border mt-1 animate-fade-in">
            <div className="flex flex-col gap-1 pt-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
