import { CheckCircle, Users, Server, Zap } from "lucide-react";

const QualitySection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Qualidade Premium",
      description: "Transmissão em alta definição sem travamentos",
    },
    {
      icon: Users,
      title: "Clientes Satisfeitos",
      description: "Alta taxa de renovação e fidelização",
    },
    {
      icon: Server,
      title: "Servidores Estáveis",
      description: "Infraestrutura robusta 24/7",
    },
    {
      icon: Zap,
      title: "Suporte Rápido",
      description: "Atendimento ágil para você e seus clientes",
    },
  ];

  return (
    <section id="qualidade" className="py-12 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            REVENDA IPTV COM SERVIDORES{" "}
            <span className="text-gradient-orange">FOCADOS EM QUALIDADE</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Clientes satisfeitos, estabilidade garantida e alta taxa de renovação.
          </p>
          <div className="w-24 h-1 bg-orange-gradient mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card-gradient border border-border rounded-2xl p-6 md:p-8 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
