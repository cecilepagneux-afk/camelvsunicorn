import { Mail, Linkedin, ArrowRight } from "lucide-react";
import cvdsLogo from "@/assets/cvds-logo-main.png";

const Footer = () => {
  return (
    <footer className="bg-cvds-dark text-white">
      {/* Top CTA strip */}
      <div className="bg-gradient-to-r from-cvds-primary to-cvds-secondary py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-lg mb-1">
              Ready to deploy in Australia?
            </p>
            <p className="text-white/80 text-sm">
              Confidential. Execution-focused. No obligation.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-cvds-primary font-semibold px-7 py-3 rounded-full hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg text-sm whitespace-nowrap"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main footer body */}
      <div className="py-14 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img
              src={cvdsLogo}
              alt="CVDS Digital Ventures"
              className="h-10 mb-5 opacity-90"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Deploying critical technologies across Australia's industrial sectors.
            </p>
            <p className="text-white/40 text-xs italic">
              Market builder for deep-tech companies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-5">Navigation</p>
            <ul className="space-y-3">
              {[
                { href: "#thesis", label: "Why Australia" },
                { href: "#approach", label: "Approach" },
                { href: "#focus", label: "Focus Areas" },
                { href: "#model", label: "Our Model" },
                { href: "#partnerships", label: "Partnerships" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-5">Get in Touch</p>
            <div className="space-y-3">
              <a
                href="mailto:contact@cvds.ventures"
                className="flex items-center gap-3 text-white/70 text-sm hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-cvds-secondary group-hover:scale-110 transition-transform" />
                contact@cvds.ventures
              </a>
              <a
                href="https://www.linkedin.com/in/cecile-pagneux/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 text-sm hover:text-white transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-cvds-secondary group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
              <p className="text-white/50 text-xs pt-2">Perth, Western Australia</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">© 2025 CVDS Digital Ventures · Perth, WA</p>
          <p className="text-white/30 text-xs">
            Critical technology deployment in Australia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
