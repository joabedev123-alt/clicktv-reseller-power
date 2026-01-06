import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como funciona?",
      answer:
        "Você recebe acesso a um painel de revendedor onde pode criar e gerenciar contas para seus clientes. Cada ativação ou renovação consome créditos do seu saldo, que você pode recarregar a qualquer momento.",
    },
    {
      question: "Qual será meu custo?",
      answer:
        "O investimento inicial é acessível e você define seu próprio lucro. Quanto mais você vende, maior sua margem. Não há mensalidades obrigatórias, você só recarrega quando precisa.",
    },
    {
      question: "Por quanto posso vender?",
      answer:
        "Você tem liberdade total para definir seus preços. A maioria dos revendedores pratica valores entre R$30 a R$50 mensais por cliente, garantindo uma excelente margem de lucro.",
    },
    {
      question: "Como recebo minhas vendas?",
      answer:
        "Você recebe diretamente dos seus clientes através de PIX, transferência ou qualquer outro método que preferir. O dinheiro vai direto para você, sem intermediários.",
    },
    {
      question: "Do que eu preciso para começar?",
      answer:
        "Apenas um celular ou computador com internet. Oferecemos todo o suporte técnico necessário, materiais de divulgação e treinamento para você começar a vender imediatamente.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Perguntas Frequentes sobre a nossa{" "}
              <span className="text-gradient-orange">Revenda IPTV</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-2xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
