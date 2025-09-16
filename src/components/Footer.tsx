const Footer = () => {
  return (
    <footer className="bg-cvds-secondary py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-300 text-sm">
          © 2025 CVDS Digital Ventures · {" "}
          <a 
            href="mailto:cecile.pagneux@hotmail.fr" 
            className="text-cvds-accent hover:text-cvds-accent-hover transition-colors font-medium"
          >
            Contact
          </a>
          {" "} · {" "}
          <a 
            href="https://www.linkedin.com/in/cecile-pagneux/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-cvds-accent hover:text-cvds-accent-hover transition-colors font-medium"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;