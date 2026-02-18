import { Link, useLocation } from "react-router-dom";
import { Menu, X, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import cvdsLogo from "@/assets/cvds-logo-main.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const links = [
    { path: "/", label: "Home" },
    { path: "/philosophy", label: "Philosophy" },
    { path: "/thesis", label: "Investment Thesis" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/collaborate", label: "Collaborate" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "py-3" : "py-4"}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center group" aria-label="CVDS Digital Ventures — Home">
            <img
              src={cvdsLogo}
              alt="CVDS Digital Ventures"
              className={`w-auto transition-all duration-300 group-hover:opacity-80 ${scrolled ? "h-10" : "h-12"}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-cvds-primary text-white shadow-sm"
                    : "text-gray-600 hover:text-cvds-primary hover:bg-cvds-primary/8"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cvds-secondary" />
                )}
              </Link>
            ))}

            <div className="w-px h-5 bg-gray-200 mx-2" />

            <a
              href="https://www.linkedin.com/in/cecile-pagneux/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-cvds-primary hover:bg-cvds-primary/10 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6 text-cvds-dark" /> : <Menu className="w-6 h-6 text-cvds-dark" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in border-t border-gray-100 mt-1">
            <div className="flex flex-col gap-1 pt-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-5 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? "bg-cvds-primary text-white shadow-sm"
                      : "text-gray-700 hover:bg-cvds-primary/8 hover:text-cvds-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 px-5">
                <a
                  href="https://www.linkedin.com/in/cecile-pagneux/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-cvds-primary font-medium hover:underline"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

