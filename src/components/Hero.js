import { CheckIcon, HeartIcon, ShieldIcon, StarIcon } from "./Icons";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "20k+", label: "Happy Patients" },
  { value: "25+", label: "Expert Doctors" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-sky-50 pb-16 pt-28 md:pt-40 lg:pb-24"
    >
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-100 blur-3xl" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="section-tag">Your Health, Our Priority</span>
          <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Trusted Medical Care for <span className="text-primary-500">Your Family</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Umair Clinic provides compassionate, modern healthcare with experienced doctors,
            advanced diagnostics and a patient-first approach — all under one roof.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Qualified specialists", "24/7 emergency care", "Modern lab & diagnostics", "Affordable consultation"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2 text-slate-700">
                  <span className="rounded-full bg-primary-100 p-1 text-primary-600">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              )
            )}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#appointment" className="btn-primary">Book Appointment</a>
            <a href="#services" className="btn-outline">Our Services</a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-primary-600 sm:text-3xl">{s.value}</p>
                <p className="text-xs text-slate-500 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-primary-100 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80"
              alt="Doctor at Umair Clinic"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -left-4 top-10 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:-left-8">
            <span className="rounded-xl bg-rose-100 p-2 text-rose-500"><HeartIcon /></span>
            <div>
              <p className="text-sm font-semibold text-slate-900">Patient Care</p>
              <p className="text-xs text-slate-500">Compassion first</p>
            </div>
          </div>

          <div className="absolute -right-4 bottom-10 rounded-2xl bg-white p-4 shadow-xl sm:-right-8">
            <div className="flex items-center gap-2">
              <span className="rounded-xl bg-primary-100 p-2 text-primary-600"><ShieldIcon /></span>
              <div>
                <p className="text-sm font-semibold text-slate-900">4.9 Rating</p>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-3.5 w-3.5" />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
