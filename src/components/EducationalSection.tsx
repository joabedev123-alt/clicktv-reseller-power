import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const EducationalSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5579988444715?text=Olá! Quero saber mais sobre como funciona a revenda IPTV", "_blank");
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Qualidade exige{" "}
              <span className="text-gradient-orange underline decoration-primary decoration-4 underline-offset-8">
                PREÇO!
              </span>
            </h2>
          </div>

          <div className="bg-card-gradient border border-border rounded-3xl p-8 md:p-12">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
              Como funciona a revenda IPTV?
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed text-center mb-8">
              Você terá acesso a um painel exclusivo para gerenciar e cadastrar novos
              clientes como sub-revendedor. Cada cliente ativado ou renovado consome
              créditos do seu saldo. É simples, transparente e você tem total
              controle sobre suas vendas e ganhos.
            </p>
            <div className="text-center">
              <Button variant="hero" size="lg" onClick={handleWhatsApp}>
                SAIBA MAIS
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalSection;
