import { Instagram, Facebook, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navegação",
      links: [
        { label: "Planos IPTV", href: "#planos" },
        { label: "Revenda", href: "#revenda" },
        { label: "Como Funciona", href: "#como-funciona" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Termos de Uso", href: "#" },
        { label: "Política de Privacidade", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Click TV Logo" className="h-12 w-auto" />
            </a>
            <p className="text-muted-foreground mb-6">
              A melhor solução em entretenimento para você e sua família. Qualidade, estabilidade e o melhor suporte do mercado.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="font-bold text-lg mb-4 text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 text-foreground">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/5579988444715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>(79) 98844-4715</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@clicktv.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>contato@clicktv.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Click TV – Todos os direitos reservados
          </p>

          <p className="text-sm font-medium flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors duration-200 cursor-default md:mr-24">
            Produzida com <span className="text-emerald-500 animate-pulse">💚</span> por <span className="font-bold text-foreground">Camaly</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
