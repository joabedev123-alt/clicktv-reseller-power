import { Tv, Globe, Film } from "lucide-react";

const ChannelsSection = () => {
  const channels = [
    {
      icon: Tv,
      title: "Canais Nacionais",
      description: "Os principais canais do Brasil com qualidade premium.",
    },
    {
      icon: Globe,
      title: "Canais Internacionais",
      description: "Conteúdos do mundo todo, disponíveis a qualquer momento.",
    },
    {
      icon: Film,
      title: "Conteúdo On Demand",
      description: "Filmes, séries e lançamentos disponíveis quando quiser.",
    },
  ];

  return (
    <section id="planos" className="py-12 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Revenda IPTV:{" "}
            <span className="text-gradient-orange">Nossa grade de canais</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Todo tipo de conteúdo disponível em um só lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {channels.map((channel, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-3xl p-8 text-center hover:border-primary transition-all duration-500 hover:glow-orange"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <channel.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3">{channel.title}</h3>
              <p className="text-muted-foreground">{channel.description}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default ChannelsSection;
