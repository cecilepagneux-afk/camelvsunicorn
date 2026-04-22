import { Mail, Linkedin, MapPin } from "lucide-react";
import cvdsLogo from "@/assets/cvds-logo-main.png";

const Footer = () => {
  const navLinks = [
    { href: "#thesis", label: "Why Australia" },
    { href: "#approach", label: "Approach" },
    { href: "#focus", label: "Focus" },
    { href: "#model", label: "Model" },
    { href: "#partnerships", label: "Partnerships" },
  ];

  const resourceLinks = [
    { href: "#contact", label: "Contact" },
    { href: "https://www.linkedin.com/in/cecile-pagneux/", label: "LinkedIn", external: true },
  ];

  return (
    <footer className="bg-[hsl(var(--background-2))] border-t border-white/[0.08] pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 pb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <img src={cvdsLogo} alt="CVDS Digital Ventures" className="h-12 mb-5 opacity-95" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px]">
              Building critical technology ventures for real-world deployment across Australia's industrial sectors.
            </p>
            <p className="font-mono-tech text-xs text-accent mt-5 tracking-wider">
              <span className="opacity-50">{"// "}</span>PERTH · WESTERN AUSTRALIA
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h5 className="text-xs font-semibold tracking-[0.08em] uppercase text-muted-foreground mb-4">
              Navigate
            </h5>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h5 className="text-xs font-semibold tracking-[0.08em] uppercase text-muted-foreground mb-4">
              Connect
            </h5>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:contact@cvds.ventures"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  contact@cvds.ventures
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CVDS Digital Ventures. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-primary" />
              Perth, WA
            </span>
            <a
              href="mailto:contact@cvds.ventures"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Mail className="w-3 h-3 text-primary" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/cecile-pagneux/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Linkedin className="w-3 h-3 text-primary" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;