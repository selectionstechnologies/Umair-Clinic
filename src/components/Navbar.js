import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon, PhoneIcon, PlusIcon } from "./Icons";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#doctors", label: "Doctors" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top info bar */}
      <div className="hidden bg-primary-900 text-sm text-primary-100 md:block">
        <div className="container-x flex h-10 items-center justify-between">
          <p>Mon – Sat: 9:00 AM – 10:00 PM · Emergency 24/7</p>
          <a href="tel:+923324108282" className="flex items-center gap-2 hover:text-white">
            <PhoneIcon className="h-4 w-4" /> +92 332 4108282
          </a>
        </div>
      </div>

      <nav
        className={`transition-all ${
          scrolled || open ? "bg-white shadow-md" : "bg-white/80 backdrop-blur"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between lg:h-20">
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500 text-white">
              <PlusIcon />
            </span>
            <span className="text-xl font-bold text-slate-900">
              Umair <span className="text-primary-500">Clinic</span>
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="font-medium text-slate-600 transition hover:text-primary-500">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#appointment" className="btn-primary hidden lg:inline-flex">
            Book Appointment
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-100 bg-white lg:hidden">
            <ul className="container-x flex flex-col py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-primary-50 hover:text-primary-600"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a href="#appointment" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
