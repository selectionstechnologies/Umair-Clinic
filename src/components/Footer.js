import { PlusIcon } from "./Icons";

const columns = [
  { title: "Quick Links", items: [["Home", "#home"], ["About", "#about"], ["Doctors", "#doctors"], ["Contact", "#contact"]] },
  { title: "Services", items: [["General Medicine", "#services"], ["Cardiology", "#services"], ["Pediatrics", "#services"], ["Dental Care", "#services"]] },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500 text-white"><PlusIcon /></span>
            <span className="text-xl font-bold text-white">Umair <span className="text-primary-500">Clinic</span></span>
          </a>
          <p className="mt-4 max-w-sm">
            Providing trusted, affordable and compassionate healthcare to families for over 15 years.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-white">{col.title}</h4>
            <ul className="mt-4 space-y-2">
              {col.items.map(([label, href]) => (
                <li key={label}><a href={href} className="hover:text-primary-400">{label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-800">
        <p className="container-x py-6 text-center text-sm">
          © {new Date().getFullYear()} Umair Clinic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
