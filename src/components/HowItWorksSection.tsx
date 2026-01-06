import { Button } from "@/components/ui/button";
import { Laptop, TrendingUp, Headphones } from "lucide-react";

const HowItWorksSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5579988444715?text=Olá! Quero adquirir a promoção de revenda IPTV", "_blank");
  };

  const benefits = [
    {
      icon: Laptop,
      text: "Trabalhe de casa em home office",
    },
    {
      icon: TrendingUp,
      text: "Sem experiência técnica necessária",
    },
    {
      icon: Headphones,
      text: "Suporte completo para você focar nas vendas",
    },
  ];

  return (
    <section className="py-12 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            ENTENDA COMO <span className="text-gradient-orange">FUNCIONA</span>
          </h2>
          <p className="text-primary font-semibold text-lg mb-8">
            Trabalhe de casa em home office com revenda IPTV
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            A Click TV oferece uma estrutura completa para quem deseja lucrar com
            IPTV. Não é necessário experiência técnica. Fornecemos suporte,
            estabilidade e qualidade para você focar apenas nas vendas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-medium text-foreground">{benefit.text}</p>
              </div>
            ))}
          </div>

          <Button variant="hero" size="xl" onClick={handleWhatsApp}>
            ADQUIRIR PROMOÇÃO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
