import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QualitySection from "@/components/QualitySection";
import EducationalSection from "@/components/EducationalSection";
import ChannelsSection from "@/components/ChannelsSection";
import ResellerSection from "@/components/ResellerSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServersSection from "@/components/ServersSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <QualitySection />
      <EducationalSection />
      <ChannelsSection />
      <ResellerSection />
      <HowItWorksSection />
      <ServersSection />
      <FAQSection />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
