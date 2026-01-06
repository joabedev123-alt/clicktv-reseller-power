import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide navbar when scrolled down (> 50px), show when at the top
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Planos IPTV", href: "#planos" },
    { label: "Revenda IPTV", href: "#revenda" },
    { label: "Dúvidas", href: "#faq" },
    { label: "Testar IPTV", href: "#testar" },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/5579988444715?text=Olá! Quero saber mais sobre a revenda IPTV Click TV", "_blank");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border transition-transform duration-300 ${isScrolled ? "-translate-y-full" : "translate-y-0"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-28">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src="/logo.png" alt="Click TV Logo" className="h-16 md:h-24 w-auto" />
            <span className="text-2xl md:text-3xl font-extrabold sr-only">
              Click TV
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="nav" onClick={handleWhatsApp}>
              Quero Revender
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="nav" onClick={handleWhatsApp} className="mt-2">
                Quero Revender
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
