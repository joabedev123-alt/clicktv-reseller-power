import { Button } from "@/components/ui/button";
import { Server, Shield, Zap, DollarSign, Settings } from "lucide-react";

const ServersSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5579988444715?text=Olá! Quero começar a vender IPTV com a Click TV", "_blank");
  };

  const features = [
    { icon: Server, text: "Painel exclusivo" },
    { icon: Settings, text: "Controle de créditos" },
    { icon: Shield, text: "Estabilidade garantida" },
    { icon: DollarSign, text: "Sem mensalidade obrigatória" },
    { icon: Zap, text: "Flexibilidade total" },
  ];

  return (
    <section id="testar" className="py-12 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            Temos várias opções de{" "}
            <span className="text-gradient-orange">servidores</span> para você!
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            Com nosso painel exclusivo, você tem total controle sobre seus créditos
            e clientes. Nossa infraestrutura oferece estabilidade garantida, sem
            mensalidade obrigatória, dando a você flexibilidade total para crescer
            no seu ritmo.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
              >
                <feature.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          <Button variant="hero" size="xl" onClick={handleWhatsApp}>
            Venha Vender IPTV Conosco!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServersSection;
