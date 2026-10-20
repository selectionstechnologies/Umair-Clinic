const doctors = [
  {
    name: "Dr. Muhammad Umair",
    role: "General Physician · MBBS, FCPS",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Dr. Ayesha Khan",
    role: "Pediatrician · MBBS, DCH",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Dr. Ali Raza",
    role: "Cardiologist · MBBS, FCPS",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Dr. Sara Ahmed",
    role: "Dentist · BDS, MDS",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&q=80",
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-16 lg:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-tag">Our Team</span>
          <h2 className="section-title">Meet Our Specialists</h2>
          <p className="mt-4 text-slate-600">Highly qualified doctors committed to providing the best care.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((d) => (
            <div key={d.name} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:shadow-xl">
              <div className="aspect-square overflow-hidden bg-primary-50">
                <img src={d.img} alt={d.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-slate-900">{d.name}</h3>
                <p className="mt-1 text-sm text-primary-600">{d.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
