import { MailIcon, MapIcon, PhoneIcon } from "./Icons";

const info = [
  { icon: MapIcon, title: "Address", text: "Main Boulevard, Lahore, Pakistan" },
  { icon: PhoneIcon, title: "Phone", text: "+92 300 1234567", href: "tel:+923001234567" },
  { icon: MailIcon, title: "Email", text: "info@umairclinic.com", href: "mailto:info@umairclinic.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-tag">Contact Us</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="mt-4 text-slate-600">Visit us, call us or send an email — we're happy to help.</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            {info.map(({ icon: Icon, title, text, href }) => (
              <div key={title} className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5 shadow-sm">
                <span className="rounded-xl bg-primary-100 p-3 text-primary-600"><Icon /></span>
                <div>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  {href ? (
                    <a href={href} className="text-slate-600 hover:text-primary-600">{text}</a>
                  ) : (
                    <p className="text-slate-600">{text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="h-80 overflow-hidden rounded-2xl shadow-sm lg:col-span-2 lg:h-auto">
            <iframe
              title="Umair Clinic location"
              src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
              className="h-full min-h-[20rem] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
