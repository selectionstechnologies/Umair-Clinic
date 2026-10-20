import { useEffect, useRef, useState } from "react";
import { CloseIcon, PlusIcon } from "./Icons";
import { WhatsAppIcon, whatsappLink } from "./WhatsAppButton";

// Simple rule-based assistant: each topic has keywords and a canned answer.
const topics = [
  {
    label: "Clinic Timings",
    keywords: ["time", "timing", "hour", "open", "close", "waqt", "kab"],
    answer: "We are open Mon – Fri 9:00 AM – 10:00 PM and Saturday 10:00 AM – 8:00 PM. Sunday is emergency only. Emergency care is available 24/7.",
  },
  {
    label: "Book Appointment",
    keywords: ["appointment", "book", "booking", "visit", "milna"],
    answer: "You can book using the appointment form on this page, call +92 300 1234567, or message us on WhatsApp for a quick confirmation.",
    link: { href: "#appointment", text: "Go to appointment form" },
  },
  {
    label: "Our Services",
    keywords: ["service", "treatment", "department", "doctor", "specialist", "ilaj"],
    answer: "We offer General Medicine, Cardiology, Pediatrics, Dental Care, Orthopedics and Laboratory Tests.",
    link: { href: "#services", text: "View all services" },
  },
  {
    label: "Consultation Fee",
    keywords: ["fee", "fees", "price", "cost", "charges", "kitni"],
    answer: "Consultation fees vary by specialist. Please contact us on WhatsApp or call for the latest fee details.",
  },
  {
    label: "Location",
    keywords: ["location", "address", "where", "kahan", "map", "direction"],
    answer: "We are located at Main Boulevard, Lahore, Pakistan.",
    link: { href: "#contact", text: "Open map" },
  },
  {
    label: "Emergency",
    keywords: ["emergency", "urgent", "ambulance"],
    answer: "For emergencies please call +92 300 1234567 immediately. Our emergency team is available 24/7.",
    link: { href: "tel:+923001234567", text: "Call now" },
  },
];

const fallback =
  "Sorry, I didn't quite get that. Please choose an option below or chat with our team directly on WhatsApp.";

const findTopic = (text) => {
  const q = text.toLowerCase();
  return topics.find((t) => t.keywords.some((k) => q.includes(k)) || q.includes(t.label.toLowerCase()));
};

const greeting = {
  from: "bot",
  text: "Assalam-o-Alaikum! 👋 I'm the Umair Clinic assistant. How can I help you today?",
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([greeting]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, open]);

  const send = (text) => {
    const value = text.trim();
    if (!value || typing) return;
    setMessages((m) => [...m, { from: "user", text: value }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const topic = findTopic(value);
      setMessages((m) => [
        ...m,
        topic
          ? { from: "bot", text: topic.answer, link: topic.link }
          : { from: "bot", text: fallback, whatsapp: value },
      ]);
      setTyping(false);
    }, 600);
  };

  return (
    <>
      {open && (
        <div className="fixed inset-x-3 bottom-24 z-50 flex max-h-[75vh] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200 sm:inset-x-auto sm:right-6 sm:w-96">
          <div className="flex items-center justify-between bg-gradient-to-r from-primary-500 to-primary-700 p-4 text-white">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20"><PlusIcon /></span>
              <div>
                <p className="font-semibold">Clinic Assistant</p>
                <p className="flex items-center gap-1 text-xs text-primary-100">
                  <span className="h-2 w-2 rounded-full bg-green-400" /> Online
                </p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="rounded-full p-1.5 hover:bg-white/20" aria-label="Close chat">
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                    m.from === "user"
                      ? "rounded-br-sm bg-primary-500 text-white"
                      : "rounded-bl-sm bg-white text-slate-700 shadow-sm"
                  }`}
                >
                  <p>{m.text}</p>
                  {m.link && (
                    <a
                      href={m.link.href}
                      onClick={() => setOpen(false)}
                      className="mt-2 inline-block font-medium text-primary-600 hover:underline"
                    >
                      {m.link.text} →
                    </a>
                  )}
                  {m.whatsapp && (
                    <a
                      href={whatsappLink(m.whatsapp)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-medium text-white"
                    >
                      <WhatsAppIcon className="h-4 w-4" /> Ask on WhatsApp
                    </a>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex w-16 gap-1 rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm">
                {[0, 150, 300].map((d) => (
                  <span key={d} className="h-2 w-2 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: `${d}ms` }} />
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-2 pt-1">
              {topics.map((t) => (
                <button
                  key={t.label}
                  onClick={() => send(t.label)}
                  className="rounded-full border border-primary-200 bg-white px-3 py-1.5 text-xs font-medium text-primary-700 transition hover:bg-primary-500 hover:text-white"
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div ref={endRef} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex gap-2 border-t border-slate-100 p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 rounded-full border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
            />
            <button type="submit" className="rounded-full bg-primary-500 px-4 text-sm font-medium text-white hover:bg-primary-600">
              Send
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg shadow-primary-500/40 transition hover:scale-105 hover:bg-primary-600 sm:bottom-6 sm:right-6"
      >
        {open ? (
          <CloseIcon />
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M8 9h8M8 13h5" />
          </svg>
        )}
      </button>
    </>
  );
}
