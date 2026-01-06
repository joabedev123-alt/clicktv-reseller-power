import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const handleSaberMais = () => {
    document.getElementById("qualidade")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Revenda IPTV Click TV:{" "}
            <span className="text-gradient-orange">
              Seja um revendedor profissional
            </span>{" "}
            dos melhores servidores do Brasil
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Trabalhe com uma estrutura sólida, servidores estáveis e alta qualidade
            de transmissão. Comece hoje mesmo a vender IPTV com suporte completo e
            total liberdade.
          </p>

          <Button
            variant="hero"
            size="xl"
            onClick={handleSaberMais}
            className="animate-pulse-glow"
          >
            SABER MAIS
            <ChevronDown className="ml-2" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="text-primary w-8 h-8" />
      </div>
    </section>
  );
};

export default HeroSection;
