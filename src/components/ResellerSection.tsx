import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";

const ResellerSection = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5579988444715?text=Olá! Quero aproveitar a promoção do Painel Dinâmico com 5 créditos + Mini Curso por 60 reais",
      "_blank"
    );
  };

  return (
    <section id="revenda" className="py-12 md:py-28 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            REVENDA IPTV <span className="text-gradient-orange">MASTER E ULTRA</span>
          </h2>
          <div className="w-32 h-1 bg-orange-gradient mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comece hoje mesmo seu negócio próprio com baixo investimento e alta lucratividade.
          </p>
        </div>

        {/* Dynamic Panel Offer Card */}
        <div className="max-w-md mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-primary rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative bg-background border border-border rounded-2xl p-8 md:p-10 shadow-2xl">

              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1 uppercase tracking-wider">
                  <Star className="w-4 h-4 fill-current" />
                  Oferta Exclusiva
                </span>
              </div>

              <div className="text-center mb-8 pt-4">
                <div className="flex justify-center items-end gap-1 mb-4">
                  <span className="text-muted-foreground text-lg mb-1">A partir de</span>
                  <span className="text-4xl md:text-5xl font-extrabold text-gradient-orange">R$ 60</span>
                  <span className="text-muted-foreground text-xl">,00</span>
                </div>
                <p className="text-muted-foreground">O melhor pacote para iniciantes</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-foreground font-medium">5 Créditos iniciais</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-foreground font-medium">Mini Curso de Vendas Incluso</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-foreground font-medium">Painel Administrativo Completo</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-foreground font-medium">Suporte via WhatsApp</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-foreground font-medium">Tutoriais de Configuração</span>
                </div>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={handleWhatsApp}
              >
                <Zap className="mr-2 w-5 h-5" />
                QUERO COMEÇAR
              </Button>

              <p className="text-center text-xs text-muted-foreground mt-4">
                Promoção por tempo limitado. Garanta sua vaga!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResellerSection;
