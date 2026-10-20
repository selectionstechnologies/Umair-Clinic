import { useState } from "react";
import { ClockIcon, PhoneIcon } from "./Icons";

const hours = [
  ["Monday – Friday", "9:00 AM – 10:00 PM"],
  ["Saturday", "10:00 AM – 8:00 PM"],
  ["Sunday", "Emergency Only"],
];

const input =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100";

export default function Appointment() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  };

  return (
    <section id="appointment" className="bg-gradient-to-br from-primary-600 to-primary-900 py-16 lg:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-5">
        <div className="text-white lg:col-span-2">
          <span className="mb-3 inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-semibold">Appointment</span>
          <h2 className="text-3xl font-bold sm:text-4xl">Book Your Visit Today</h2>
          <p className="mt-4 text-primary-100">
            Fill out the form and our team will contact you to confirm your appointment.
          </p>

          <div className="mt-8 rounded-2xl bg-white/10 p-6">
            <h3 className="flex items-center gap-2 font-semibold"><ClockIcon /> Opening Hours</h3>
            <ul className="mt-4 divide-y divide-white/10">
              {hours.map(([day, time]) => (
                <li key={day} className="flex justify-between py-3 text-sm">
                  <span>{day}</span>
                  <span className="font-medium">{time}</span>
                </li>
              ))}
            </ul>
          </div>

          <a href="tel:+923324108282" className="mt-6 flex items-center gap-3 rounded-2xl bg-white/10 p-5 hover:bg-white/20">
            <span className="rounded-xl bg-white p-3 text-primary-600"><PhoneIcon /></span>
            <span>
              <span className="block text-sm text-primary-100">Emergency Call</span>
              <span className="text-lg font-semibold">+92 332 4108282</span>
            </span>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 shadow-2xl sm:p-10 lg:col-span-3">
          <div className="grid gap-5 sm:grid-cols-2">
            <input required className={input} placeholder="Full Name" />
            <input required type="tel" className={input} placeholder="Phone Number" />
            <input type="email" className={input} placeholder="Email (optional)" />
            <select required defaultValue="" className={input}>
              <option value="" disabled>Select Department</option>
              <option>General Medicine</option>
              <option>Cardiology</option>
              <option>Pediatrics</option>
              <option>Dental Care</option>
              <option>Orthopedics</option>
              <option>Laboratory Tests</option>
            </select>
            <input required type="date" className={input} />
            <input required type="time" className={input} />
            <textarea rows="4" className={`${input} sm:col-span-2`} placeholder="Describe your problem (optional)" />
          </div>
          <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">Request Appointment</button>
          {sent && (
            <p className="mt-4 rounded-xl bg-green-50 p-3 text-sm text-green-700">
              Thank you! Your request has been received. We will call you shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
