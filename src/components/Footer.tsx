import { Link } from "react-router-dom";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import cvdsLogo from "@/assets/cvds-logo-main.png";

const footerLinks = [
  { path: "/philosophy", label: "Philosophy" },
  { path: "/thesis", label: "Investment Thesis" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/collaborate", label: "Collaborate" },
  { path: "/contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="bg-cvds-dark text-white">
      {/* Top CTA strip */}
      <div className="bg-gradient-to-r from-cvds-primary to-cvds-secondary py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-lg mb-1">
              Ready to explore a transition?
            </p>
            <p className="text-white/80 text-sm">
              No obligation. Confidential. Respectful process.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-cvds-primary font-semibold px-7 py-3 rounded-full hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg text-sm whitespace-nowrap"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
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
              Acquiring and operating digital B2B companies. Continuity, structure, and long-term value.
            </p>
            <p className="text-white/40 text-xs italic">
              Micro-acquisitions. Human growth. Global reach.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-5">Navigation</p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-5">Get in Touch</p>
            <div className="space-y-3">
              <a
                href="mailto:cecile.pagneux@hotmail.fr"
                className="flex items-center gap-3 text-white/70 text-sm hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-cvds-secondary group-hover:scale-110 transition-transform" />
                cecile.pagneux@hotmail.fr
              </a>
              <a
                href="https://www.linkedin.com/in/cecile-pagneux/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 text-sm hover:text-white transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-cvds-secondary group-hover:scale-110 transition-transform" />
                LinkedIn Profile
              </a>
              <p className="text-white/50 text-xs pt-2">Perth, Western Australia</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">© 2025 CVDS Digital Ventures · Perth (WA)</p>
          <p className="text-white/30 text-xs">
            Digital B2B acquisitions. Structured transitions. Long-term value.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
