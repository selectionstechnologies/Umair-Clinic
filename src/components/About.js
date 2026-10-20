import { CheckIcon, ClockIcon, ShieldIcon, UsersIcon } from "./Icons";

const features = [
  { icon: UsersIcon, title: "Experienced Team", text: "Certified doctors and trained staff dedicated to your wellbeing." },
  { icon: ShieldIcon, title: "Safe & Hygienic", text: "Strict sterilization and international safety standards." },
  { icon: ClockIcon, title: "Always Available", text: "Round-the-clock emergency support whenever you need it." },
];

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"
            alt="Clinic interior"
            className="h-64 w-full rounded-2xl object-cover sm:h-80"
          />
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
            alt="Medical consultation"
            className="mt-10 h-64 w-full rounded-2xl object-cover sm:h-80"
          />
        </div>

        <div>
          <span className="section-tag">About Us</span>
          <h2 className="section-title">Caring for Our Community Since 2010</h2>
          <p className="mt-5 text-slate-600">
            At Umair Clinic we believe quality healthcare should be accessible to everyone. Our
            multi-specialty clinic combines experienced physicians, modern equipment and a warm,
            friendly environment so every patient feels heard and cared for.
          </p>
          <ul className="mt-6 space-y-2">
            {["Personalized treatment plans", "Transparent & affordable pricing", "Digital reports and follow-ups"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-slate-700">
                <CheckIcon className="h-5 w-5 text-primary-500" /> {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <span className="inline-flex rounded-xl bg-primary-100 p-2 text-primary-600"><Icon /></span>
                <h3 className="mt-3 font-semibold text-slate-900">{title}</h3>
                <p className="mt-1 text-sm text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
