export const WHATSAPP_NUMBER = "923324108282";

export const whatsappLink = (text = "Hello Umair Clinic, I would like to book an appointment.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const WhatsAppIcon = ({ className = "h-7 w-7" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 12 2.2a9.8 9.8 0 0 1 9.8 9.8c0 5.4-4.4 9.8-9.8 9.8zm8.4-18.2A11.8 11.8 0 0 0 1.7 17.8L0 24l6.3-1.7a11.8 11.8 0 0 0 5.7 1.4c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.3z" />
  </svg>
);

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-lg shadow-green-600/30 transition hover:scale-105 sm:bottom-6 sm:left-6"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <WhatsAppIcon />
      <span className="hidden pr-1 font-medium sm:inline">Chat with us</span>
    </a>
  );
}
