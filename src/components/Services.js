import { useState } from "react";
import { BabyIcon, BoneIcon, CheckIcon, HeartIcon, LabIcon, PhoneIcon, StethIcon, ToothIcon } from "./Icons";

const services = [
  {
    icon: StethIcon,
    title: "General Medicine",
    category: "Consultation",
    text: "Diagnosis and treatment of common illnesses, routine check-ups and preventive care for all ages.",
    items: ["Fever, flu & infections", "Diabetes & BP management", "Full body check-ups"],
  },
  {
    icon: HeartIcon,
    title: "Cardiology",
    category: "Specialist",
    text: "Complete heart health assessment and long-term management of cardiac conditions.",
    items: ["ECG & echo referral", "Chest pain evaluation", "Cholesterol control"],
  },
  {
    icon: BabyIcon,
    title: "Pediatrics",
    category: "Specialist",
    text: "Gentle, specialized care for newborns, infants, children and adolescents.",
    items: ["Vaccinations", "Growth monitoring", "Child nutrition advice"],
  },
  {
    icon: ToothIcon,
    title: "Dental Care",
    category: "Specialist",
    text: "Modern dental treatments for a healthy, confident smile.",
    items: ["Scaling & polishing", "Fillings & root canal", "Teeth whitening"],
  },
  {
    icon: BoneIcon,
    title: "Orthopedics",
    category: "Specialist",
    text: "Treatment for bone, joint and muscle problems, injuries and recovery.",
    items: ["Joint & back pain", "Fracture care", "Physiotherapy"],
  },
  {
    icon: LabIcon,
    title: "Laboratory Tests",
    category: "Diagnostics",
    text: "Accurate in-house diagnostics with fast digital reports sent to your phone.",
    items: ["CBC, LFT, RFT", "Sugar & HbA1c", "Same-day reports"],
  },
];

const filters = ["All", "Consultation", "Specialist", "Diagnostics"];

export default function Services() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? services : services.filter((s) => s.category === active);

  return (
    <section id="services" className="bg-slate-50 py-16 lg:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">Comprehensive Medical Services</h2>
          <p className="mt-4 text-slate-600">
            From routine check-ups to specialized treatment, we offer a complete range of healthcare services under one roof.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                active === f
                  ? "bg-primary-500 text-white shadow-md shadow-primary-500/30"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-primary-600"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map(({ icon: Icon, title, category, text, items }) => (
            <div
              key={title}
              className="group flex flex-col rounded-2xl border-t-4 border-transparent bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-primary-500 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex rounded-2xl bg-primary-100 p-4 text-primary-600 transition group-hover:bg-primary-500 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">{category}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{text}</p>
              <ul className="mt-4 space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckIcon className="h-4 w-4 shrink-0 text-primary-500" /> {item}
                  </li>
                ))}
              </ul>
              <a
                href="#appointment"
                className="mt-6 inline-flex items-center gap-1 self-start rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 transition group-hover:bg-primary-500 group-hover:text-white"
              >
                Book now →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-primary-600 to-primary-800 p-8 text-center text-white sm:p-10 md:flex-row md:text-left">
          <div>
            <h3 className="text-2xl font-bold">Not sure which service you need?</h3>
            <p className="mt-2 text-primary-100">Call us and our team will guide you to the right doctor.</p>
          </div>
          <a
            href="tel:+923324108282"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary-700 shadow-lg transition hover:bg-primary-50"
          >
            <PhoneIcon className="h-5 w-5" /> +92 332 4108282
          </a>
        </div>
      </div>
    </section>
  );
}
