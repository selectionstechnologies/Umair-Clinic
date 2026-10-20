import { BabyIcon, BoneIcon, HeartIcon, LabIcon, StethIcon, ToothIcon } from "./Icons";

const services = [
  { icon: StethIcon, title: "General Medicine", text: "Diagnosis and treatment of common illnesses, check-ups and preventive care." },
  { icon: HeartIcon, title: "Cardiology", text: "ECG, blood pressure management and complete heart health assessment." },
  { icon: BabyIcon, title: "Pediatrics", text: "Gentle, specialized care for infants, children and adolescents." },
  { icon: ToothIcon, title: "Dental Care", text: "Cleaning, fillings, root canals and cosmetic dental treatments." },
  { icon: BoneIcon, title: "Orthopedics", text: "Treatment for bone, joint and muscle pain, injuries and physiotherapy." },
  { icon: LabIcon, title: "Laboratory Tests", text: "Accurate blood tests and diagnostics with fast digital reports." },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-16 lg:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">Comprehensive Medical Services</h2>
          <p className="mt-4 text-slate-600">
            From routine check-ups to specialized treatment, we offer a complete range of healthcare services.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:bg-primary-500 hover:shadow-xl"
            >
              <span className="inline-flex rounded-2xl bg-primary-100 p-4 text-primary-600 transition group-hover:bg-white/20 group-hover:text-white">
                <Icon className="h-8 w-8" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-slate-900 group-hover:text-white">{title}</h3>
              <p className="mt-3 text-slate-600 group-hover:text-primary-50">{text}</p>
              <a href="#appointment" className="mt-5 inline-block font-medium text-primary-600 group-hover:text-white">
                Book now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
