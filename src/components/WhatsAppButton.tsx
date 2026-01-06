import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5579988444715?text=Olá! Quero saber mais sobre a revenda IPTV Click TV"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce-short"
      aria-label="Contatar pelo WhatsApp"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
};

export default WhatsAppButton;
