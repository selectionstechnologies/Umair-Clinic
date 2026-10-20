import { StarIcon } from "./Icons";

const reviews = [
  { name: "Ahmed Hassan", text: "Very professional staff and clean environment. Dr. Umair listened carefully and explained everything clearly." },
  { name: "Fatima Noor", text: "My kids love visiting Dr. Ayesha. The clinic is child-friendly and the waiting time is minimal." },
  { name: "Bilal Sheikh", text: "Lab reports were ready the same day and sent to my phone. Highly recommended for the whole family." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-16 lg:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What Our Patients Say</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <blockquote className="mt-4 text-slate-600">“{r.text}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-500 font-semibold text-white">
                  {r.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <span>
                  <span className="block font-semibold text-slate-900">{r.name}</span>
                  <span className="text-sm text-slate-500">Patient</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
